const initModels = async()=>{
    const user = await require('./userModel');    
    const lawyer = await require('./lawyerModel');
    const people = await require('./peopleModel');    
    const law = await  require('./lawModel');    
    const station = await require('./stationModel');
    const police = await require('./policeModel');
    const wanted = await require('./wantedModel');
    const suspect = await require('./suspectModel');
    const complaint = await require('./complaintModel');
    const harassment = await require('./harassmentModel');

    

    user.hasOne(people, { sourceKey: 'id', foreignKey: 'id', onDelete: "CASCADE" });
    user.hasOne(lawyer, { sourceKey: 'id', foreignKey: 'id', onDelete: "CASCADE" });
    user.hasOne(police, { sourceKey: 'id', foreignKey: 'id', onDelete: "CASCADE" });
    lawyer.hasMany(law, { sourceKey: 'id', foreignKey: 'lawyer_id', onDelete: "CASCADE" });
    people.hasMany(complaint, { sourceKey: 'id', foreignKey: 'people_id', onDelete: "CASCADE" });
    people.hasMany(harassment, { sourceKey: 'id', foreignKey: 'people_id', onDelete: "CASCADE" });
    police.hasMany(suspect, { sourceKey: 'id', foreignKey: 'police_id', onDelete: "CASCADE" });
    police.hasMany(wanted, { sourceKey: 'id', foreignKey: 'police_id', onDelete: "CASCADE" });
    station.hasOne(police, { sourceKey: 'id', foreignKey: 'station_id', onDelete: "CASCADE" });


}


module.exports = initModels;