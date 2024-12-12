import type { FormData } from '../types/forms';

export function generateTestPayload(formData: FormData) {
  return {
    Name: formData.projectName,
    Namespace: {
      Name: formData.namespaceName,
      UnitTestClasses: [
        {
          name: formData.unitTestClassName,
          testCaseList: [
            {
              name: formData.testCaseName,
              code: formData.testCaseCode,
            },
          ],
        },
      ],
    },
  };
}