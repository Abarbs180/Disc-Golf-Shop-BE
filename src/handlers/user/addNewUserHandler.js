import { v4 as uuidv4 } from "uuid";
import catchErrors from "../catchErrors.js";
import userData from "../../database/user/userLogin.js";
import addNewUser from "../../database/user/addNewUser.js";
import storeUserUUID from "../../database/user/storeUserUUID.js";
import verifyAccountEmail from "../../utils/verifyAccountEmail.js";

const addNewUserHandler = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  const error = validation(name, email, password, confirmPassword);

  if (error) {
    return res.status(400).json(error);
  }

  const newUser = await addNewUser(email, password);

  if (newUser.rowCount === 0) {
    return res.status(400).json({ error: `User "${email}" already exists` });
  }

  const userUUID = uuidv4();

  await storeUserUUID(email, userUUID);

  const userdata = await userData(email);

  verifyAccountEmail(name, email, userdata.rows[0].id, userUUID);

  res.status(200).json({ success: "Account has been created!" });
};

const validation = (name, email, password, confirmPassword) => {
  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const specCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const upperCaseRegex = /[A-Z]+/;

  if (!name) {
    return { error: "Enter a Name" };
  }

  if (!emailRegex.test(email)) {
    return { error: "Invalid Email" };
  }

  if (
    password.length < 6 ||
    !specCharsRegex.test(password) ||
    !upperCaseRegex.test(password)
  ) {
    return {
      error:
        "Password Does Not Meet Requirements (6 characters or more, at least one special character and uppercase letter)",
    };
  }

  if (password !== confirmPassword) {
    return { error: "Password and Confirm Password Do Not Match" };
  }
};

export default catchErrors(addNewUserHandler);
