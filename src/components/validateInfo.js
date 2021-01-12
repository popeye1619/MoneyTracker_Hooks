export function validateNumber(values){
    let NanError={}
    if(isNaN(values.amount)){
        NanError.amount="must be a number"
    }
    if(isNaN(values.expenseLimit)){
        NanError.expenseLimit="must be a number"
    }
    return NanError;
}


export  function validateInfo(values) {
    let RequiredError={}

    if(!values.amount){
        RequiredError.amount="Amount Required"
    }
 
    if(!values.category){
        RequiredError.category="Category Required"
    }

    if(isNaN(values.expenseLimit)){
        RequiredError.expenseLimit="must be a number"
    }
 
    return RequiredError;

}
