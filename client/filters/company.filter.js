var CompanyFilter=function(){
    return function(items, city){
        var cities=[];
        if(!city) return items;
        angular.forEach(items, function(item){
            if(angular.lowercase(item.name).indexOf(angular.lowercase(city)) !=-1){
                cities.push(item);
            }
        });
        return cities;
    };
};

module.exports=CompanyFilter;