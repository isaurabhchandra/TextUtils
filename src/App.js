
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';



function App() {
  return (

   <>
<Navbar title = "TextUtil" about="About TextUtil" dropdown ="More"/>
<div className = "container my-3">
<TextForm heading = "Enter The Text To Analyze"/>
{/*<About/>*/}
</div>

   </>

  );
}

export default App;
