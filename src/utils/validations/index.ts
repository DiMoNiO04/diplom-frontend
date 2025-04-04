import { EValidateMessages } from './messages';
import { IFormChangePasswordData, schemaChangePassword } from './schemaChangePassword';
import { IFormLoginData, schemaLogin } from './schemaLogin';
import { IFormPasswordNewData, schemaPasswordNew } from './schemaPasswordNew';
import { IFormProfileData, schemaProfile } from './schemaProfile';
import { IFormRecipeData, schemaRecipe } from './schemaRecipe';
import { IFormRegData, schemaReg } from './schemaReg';

export { schemaChangePassword, schemaLogin, schemaPasswordNew, schemaProfile, schemaRecipe, schemaReg };
export type {
  EValidateMessages,
  IFormChangePasswordData,
  IFormLoginData,
  IFormPasswordNewData,
  IFormProfileData,
  IFormRecipeData,
  IFormRegData,
};
