
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'


function App() {
  return (
   <div className='app-wrapper'>
     <Header />
     <Navbar />
     <div className='content'>
          <img src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt=""/>
     </div>
       <div>
           ava + description
       </div>
       <div>
           My posts
           <div>
               new post
           </div>
           <div>
               <div>post 1</div>
               <div>post 2</div>
           </div>

       </div>

   </div>
  );
}

export default App;
