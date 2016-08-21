InsuranceCompanyService=function(){
    var insuranceCompany={};

    insuranceCompany.list=[
        {name:"ABC Company"},
        {name:"XYZ Company"},
    ];

    insuranceCompany.getList=function(){
        return this.list;
    };

    insuranceCompany.add=function(company){
        this.list.push(company);
    };

    insuranceCompany.update=function(company, index){
        insuranceCompany[index]=company;
    };

    return insuranceCompany;
};

InsuranceCompanyService.$inject=[];

module.exports=InsuranceCompanyService;