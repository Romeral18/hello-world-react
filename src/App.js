
import './App.css';
import Header from './components/Header'


function App() {
  return (
   <div className='app-wrapper'>
     <Header />
     <nav className='nav'>
       <div>
           <a href="">Profile</a>
       </div>
       <div>
           <a href="">Messanges</a>
       </div>
         <div>
             <a href="">News</a>
         </div>
         <div>
             <a href="">Music</a>
         </div>
         <div>
             <a href="">Settings</a>
         </div>

     </nav>
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
