"use strict";
// enum - store contants & duplicate values are not allowed
// numeric enum
/*
enum UserRequest {
    ReadData,
    // ReadData = 2,
    SaveData,
    UpdateData,
}
*/
//console.log(UserRequest);
//console.log(UserRequest.ReadData);
//console.log(UserRequest.SaveData);
// string enum
/*
enum UserRequest2 {
    ReadData = 'READ_DATA',
    // ReadData = 2,
    SaveData = 'SAVE_DATA',
    UpdateData = 'UPDATE_DATA',
    DeleteData = 'DELETE_DATA',
}

    console.log(UserRequest2);
    console.log(UserRequest2.ReadData);
    console.log(UserRequest2.SaveData);
    console.log(UserRequest2['UpdateData']);
    console.log(UserRequest2.DeleteData);
*/
// Heterogeneous enum
var UserRequest3;
(function (UserRequest3) {
    UserRequest3["readData"] = "READ_DATA";
    UserRequest3[UserRequest3["id"] = 101] = "id";
    UserRequest3["name"] = "gazi";
})(UserRequest3 || (UserRequest3 = {}));
console.log(UserRequest3);
console.log(UserRequest3.readData);
console.log(UserRequest3.id);
console.log(UserRequest3.name);
