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
enum UserRequest3 {
    readData = 'READ_DATA',
    id = 101,
    name = 'gazi',
}
console.log(UserRequest3);
console.log(UserRequest3.readData);
console.log(UserRequest3.id);
console.log(UserRequest3.name);





