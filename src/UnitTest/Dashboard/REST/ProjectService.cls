Class UnitTest.Dashboard.REST.ProjectService Extends UnitTest.Dashboard.REST.Service.Base 
{

/** Change Log
2024-12-10 - Chi Nguyen-Rettig : Created
**/


//CNR: Copied RuleProfilesList method from CCDA Validator

/// <BR> Return a list of Rule Profiles that are active or all rule profiles
ClassMethod GetProjectInfo() As %Status
{
	Set tSC = $$$OK
	#; Quit tSC
	Try {		
		#;Dispatch request to production
		#Dim tResponse as %Library.DynamicObject

		//this method should return a response that is the DynamicObject	 	
    	$$$ThrowOnError(##class(LN.UnitTest.ProjectUtil).BuildProject("Interop", "IRISAPP",.tResponse))
		


		If $$$ISERR(tResponse.Status) {
			Set %response.Status = ..#HTTP500INTERNALSERVERERROR
		}

		#;Write output 
		If $Get(%request.CgiEnvs("HTTP_ACCEPT"),"*/*") [ "application/xml" {
			Set %response.ContentType="application/xml"
			$$$ThrowOnError(tResponse.XMLExportToStream(.tStream))
		} 
		Else {
			Set %response.ContentType="application/json"
			Set tStream=##class(%Stream.GlobalCharacter).%New()		
			$$$ThrowOnError(##class(%Library.DynamicObject).toJSON(tResponse, .tStream))
		}
		Set %response.Status = ..#HTTP200OK
		Do tStream.OutputToDevice()
		Set ^zLog="Method called:OutputToDevice"
		Do %response.SetHeader("Access-Control-Allow-Origin","*")


	} 
	Catch Ex {
		Set tSC = Ex.AsStatus()
		//If $$$TESTMODE zw tSC
		Set %response.Status = ..#HTTP500INTERNALSERVERERROR
		Set tSC = $$$OK
	}
	Quit tSC
}




// AddTemplate method takes in a template and adds it to the identity template
// pXSLTemplate: A string with the template contents enclosed in tags <xsl:template></xsl:template>
// pIdentityTemplate: A string with the name of an XDATA block that contains the base stylesheet to be added to
ClassMethod AddTemplate(pXSLTemplate As %String, pIdentityTemplate As %String = "IdentityTemplateXSL") As %Stream.GlobalCharacter
{
	Set tStatus = ##class(Ens.Util.URLStream).GetURLStream("xdata://" _ $THIS _ ":"_pIdentityTemplate, .tIdentityXSL)
	$$$ThrowOnError(tStatus)

    set status=##class(%XML.TextReader).ParseStream(tIdentityXSL,.textreader)
    //check status
    if $$$ISERR(status) {do $System.Status.DisplayError(status) quit}
    
     // Create a new stream to hold the modified XML
    Set modifiedStream = ##class(%Stream.GlobalCharacter).%New()
    // Initialize a variable to track the root element name
    Set rootElement = ""
    Set isRootClosing = 0
    Set tPrefixes = ##class(%ListOfDataTypes).%New()
    
    //iterate through document, node by node
    while textreader.Read()
    {
		if textreader.NodeType = "startprefixmapping" {
			Set tValue =$PIECE(textreader.Value," ",2) 
			Do tPrefixes.Insert("xmlns:"_textreader.Name_"="""_tValue_"""")	
		}
	    //handle the start element
	    if textreader.NodeType = "element" {
		    //capture the rootElement if it's the first
	    	if rootElement = "" {
		    	set rootElement = textreader.Name
		    	Do modifiedStream.Write("<"_rootElement)
		    	
		    	//Add prefixes
		    	for i=1:1:tPrefixes.Count() {
			    	Do modifiedStream.Write(" "_tPrefixes.GetAt(i)_" ")	
			    }
			}
			else {
		    	// Write the start tag 
            	Do modifiedStream.Write("<"_textreader.Name)
			}

            // Add any attributes to the start tag
		   	For a = 1:1:textreader.AttributeCount {
         		Do textreader.MoveToAttributeIndex(a)
         		Set attrName = textreader.LocalName
                Set attrValue = textreader.Value
                Do modifiedStream.Write(" "_attrName_"="""_attrValue_"""")
     		}
		    do modifiedStream.Write(">")
		    
		    }
		    elseif textreader.NodeType = "endelement" {
			    if textreader.Name = rootElement {
					#; Append the new template
					set isRootClosing =1 
					do modifiedStream.Write(pXSLTemplate)
				}
			    // Write the closing tag
            	Do modifiedStream.Write("</"_textreader.Name_">")
			}
			elseif textreader.NodeType = "chars" {
		        Do modifiedStream.Write(textreader.Value)
        }	
    }
    Quit modifiedStream
}

XData IdentityTemplateXSL
{
<?xml version="1.0"?>
<xsl:stylesheet xmlns:hl7="urn:hl7-org:v3"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:lcm="urn:oasis:names:tc:ebxml-regrep:xsd:lcm:3.0"
	xmlns:rim="urn:oasis:names:tc:ebxml-regrep:xsd:rim:3.0" version="1.0" exclude-result-prefixes="rim">

	<xsl:output method="xml" indent="yes" omit-xml-declaration="yes"/>

    <!-- Template to normalize space in text nodes -->
    <xsl:template match="text()">
        <xsl:value-of select="normalize-space(.)"/>
    </xsl:template>
	<!-- Template to process the target XPath -->
  		<!--This is the identity template that copies everything to output -->
	<xsl:template match="//@* | //node()">
		<xsl:copy>
			<xsl:apply-templates select="@*"/>
			<xsl:apply-templates select="node()"/>
		</xsl:copy>
	</xsl:template>
</xsl:stylesheet>
}



}