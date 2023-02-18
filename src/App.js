import './app.css'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main';
const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
function App() {
  // function isPrime(number) {
  //   if (number < 2) return false;
  //   if (number === 2) return true;
  //   if (number % 2 === 0) return false;
  //   for (let i = 3; i <= Math.sqrt(number); i += 2)
  //     if (number % i === 0) return false;
  //   return true;
  // }
  function isPrime(number) {
    if (number < 2) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  return (
    <div className='app'>
      <div className='headercom'>
      <Header />

      </div>
      
      
     <div className='maincom'>
       {/* {arr.map((ele)=>{
        return ele =<Main count = {ele} / >
      })} */}
      {arr.map((num)=>{
        if(isPrime(num)){
          return num=<Main  count ={num} color="red" />
          // console.log("hel")
        }
        else{
          if(num%2===0){
          return num=<Main  count={num} color="green" />
            
          }
          else{
            return num=<Main  count={num} color="yellow" />
          }
        }
        // return num
      })}
     
     
     </div>
      
     
    </div>
  ) 
   
  
}

export default App;
