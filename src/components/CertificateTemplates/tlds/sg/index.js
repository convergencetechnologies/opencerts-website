/* eslint-disable camelcase */
/* because we need to use _ to replace hyphens in dns */
import { addDirToTemplatePath } from "template-utils/addDirToTemplatePath";

import demo from "./demo";
import edu from "./edu";
import gov from "./gov";

export default addDirToTemplatePath("sg", { ...demo, ...edu, ...gov });
