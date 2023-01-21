// import logo from "./logo.svg";
import "../css/Form.css";

const Form = () => {
  return (
    <>
      <div id="main">
        <form id="survey-form">
        <div id="input-fields">
            <label id="name-label"><b>Name:</b></label>
            <input id="name" type="name" name="name" className="form" required placeholder="Full Name"/><br/>
            <br/>
            <label id="email-label"><b>Email:</b></label>
            <input id="email" type="email" name="email" className="form" required placeholder="example@mail.com"/><br/>
            <br/>
            <label id="number-label"><b>Age:</b></label>
            <input id="number" type="number" name="number" className="form" min="5" max="99" placeholder="12+"/>
         </div>
         <div id="dropdown-div"><br/>
            <label id="dropdown-label"><strong>Programming language you are expert at: </strong></label><br/>
            <select id="dropdown" name="code-lang" className="form">
                <option value="C">C (Programming Language)</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
                <option value="php">PHP</option>
                <option value="Js">Java Script</option>
                <option value="Go">Go (Programming Language)</option>
                <option value="ruby">Ruby on rails</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
            </select>
         </div>
         <div id="button-area">
             <br/>
            <label id="job-label"><b>Employment Status:</b></label><br/>
            <input type="radio" className="radio-inline" name="gender" value="employed" checked/> Full-time job holder.(Employed)<br/>
            <input type="radio" className="radio-inline" name="gender" value="freelancer"/> Part-time job holder.(Freelancer)<br/>
            <input type="radio" className="radio-inline" name="gender" value="applier"/> Looking for a job.(Applier)<br/>
            <input type="radio" className="radio-inline" name="gender" value="unemployed"/> I am a student.(Unemployed)
          </div>
          <div id="button-area"><br/>
            <label id="os-label"><b>Operating system experience: </b></label><br/>
            <input type="checkbox" name="os1" value="windows" checked/> I am experienced with Windows-OS<br/>
            <input type="checkbox" name="os2" value="linux"/> I am experienced with Linux-OS<br/>
            <input type="checkbox" name="0s3" value="mac"/> I am experienced with Mac-OS<br/>
          </div>

          <div id="dropdown"><br/><br/>
            <label id="dropdown-label"><strong>Programming language you wanna be expert: </strong></label><br/>
            <select id="dropdown" name="code-lang" className="form"><br/><br/>
                <option value="C">C (Programming Language)</option>
                <option value="Python">Python</option>
                <option value="C#">C#</option>
                <option value="php">PHP</option>
                <option value="Js">Java Script</option>
                <option value="Go">Go (Programming Language)</option>
                <option value="ruby">Ruby on rails</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
            </select>
         </div>
          <div id="button-area"><br/><br/>
            <label id="os-label"><b>Latest technology experience:</b></label><br/>
            <input type="checkbox" name="tech1" value="flutter"/> Flutter UI<br/>
            <input type="checkbox" name="tech2" value="nodejs"/> Node.js<br/>
            <input type="checkbox" name="tech3" value="tnflow"/> Tensorflow<br/>
            <input type="checkbox" name="tech3" value="git"/> Github<br/>
            <input type="checkbox" name="tech3" value="devops"/> Dev-Ops<br/>
          </div>


          <div id="ending"><br/><br/>
            <label id="comments-label">Do you have any suggestion about this survey?</label><br/>
            <textarea style= {{height:"120px"}} className="form" placeholder="Please feel free to write a review..."></textarea><br/><br/>
            <input id="submit" type="submit"  className="form"/>
          </div>
        </form>
    </div>
    </>
  );
};

export default Form;
