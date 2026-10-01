const buyCake="BUY_CAKE";
const restockCake="RESTOCK_CAKE";


export function BUY_CAKE(q){
    return{
        type:buyCake,
        payloads: q || 1,
    }
}
 export function RESTOCK_CAKE(){
    return{
        type:restockCake,
    }
 }

 const intialCakeState = {
    numOfCakes : 20
}

  export const cakeReducer=(state=intialCakeState,action)=>{
    switch(action.type){
        
        case buyCake:
            if(action.payloads > state.numOfCakes){
                return state
            }
            return {
                numOfCakes:state.numOfCakes-action.payloads
            }
            case restockCake:
                return{
                    numOfCakes:20
                }
                default:
                    return state
            } 
 }
