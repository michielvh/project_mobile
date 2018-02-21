import { combineReducers } from 'redux';
import auth from './auth';
import kind from './kind';
import kind_dieet from './kind_dieet';
import kind_medicatie from './kind_medicatie';
import kind_tak from './kind_tak';
import kind_voogd from './kind_voogd';
import kind_ziekte from './kind_ziekte';
import activiteit from './activiteit';
import dieet from './dieet';
import groep from './groep';
import medicatie from './medicatie';
import tak from './tak';
import tijdstip from './tijdstip';
import user from './user';
import user_tak from './user_tak';
import voogd from './voogd';
import ziekte from './ziekte';


export default combineReducers({
  auth,
  kind,
  kind_dieet,
  kind_medicatie,
  kind_tak,
  kind_voogd,
  kind_ziekte,
  activiteit,
  dieet,
  groep,
  medicatie,
  tak,
  tijdstip,
  user,
  user_tak,
  voogd,
  ziekte
});