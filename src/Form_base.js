import React from 'react';
import './Form_base.css'
import { useRef,useState } from 'react';


const FormBase = () => {


const[firstName,setFirstName]=useState("")
const[secondName,setSecondName]=useState("")
const[email,setEmail]=useState("")
const[contact,setContact]=useState("")
const[gender,setGender]=useState("Male")
const[subject,setSubject]=useState({
  English: false,
  Maths: false,
  Physics: false,
})
const[upload,setUpload]=useState("")
const[url,setUrl]=useState("")
const[option,setOption]=useState("")
const[about,setAbout]=useState("")

const uploadref =useRef(null)



const handleSub =(sub)=>{
  setSubject((prev)=>({
  ...prev ,
  [sub]:!prev[sub],
}))

}


const handleSelection = (e,value) => {
  e.preventDefault()
  setOption(value);
};


const handleReset = () => {

  setFirstName("");
  setSecondName("");
  setEmail("");
  setContact("");
  setGender("Male");
  setSubject({
      English: false,
      Maths: false,
      Physics: false,
  });
  setUpload("");
  if(uploadref.current){
    uploadref.current.value = "";
  }
  setUrl("");
  setOption("");
  setAbout("");
  console.log("All states reset!");
};



const form = document.getElementById("myForm");

const handleSubmit=(e)=>{
  e.preventDefault()
  // const form = e.target;
  if (form.checkValidity()) {
    console.log(
      firstName,
      secondName,
      email,
      contact,
      gender,
      subject,
      upload,
      url,
      option,
      about
    );
    alert("Form Submitted");
    handleReset();
  } else {
    form.reportValidity();
    alert("Fill all the fields");
  }
}





  return (
    <div className="  container-fluid   p-3     ">
      

      <div className="row   d-flex flex-column  justify-content-center align-items-center p-4   ">

        <div className="flex-grow-2 col-12 col-sm-8 col-md-6  p-3 border shadow rounded border-muted container-fluid ">

            <div className="row d-flex justify-content-center ">
            <div className="fw-bold text-success fs-6 fs-md-3 col-md-3 col-5">Sample Form</div>
            </div>
            
            <div className="row">

            <form className='container-fluid'action="#" id='myForm'>
              {/* First Name */}
              <div className="row">
              <div className="mb-3 d-flex flex-column align-items-start">
                <label htmlFor="Firstname" className="col-12 form-label fw-bold text-start ">
                  First Name <span className="text-danger">*</span>
                </label> 
                <input
                  type="text"
                  id="Firstname"
                  placeholder="Enter First Name"
                  className="form-control "
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              </div>
              

              {/* Last Name */}
              <div className="row">
              <div className="mb-3 d-flex flex-column align-items-start">
                <label htmlFor="Lastname" className=" col-12 form-label fw-bold text-start">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="Lastname"
                  placeholder="Enter Last Name"
                  className="form-control"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                  required
                />
              </div>
              </div>
              

              {/* Email */}
              <div className="row">
              <div className="mb-3 d-flex flex-column align-items-start">
                <label htmlFor="Email" className=" col-12 form-label fw-bold text-start">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  id="Email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              </div>
              

              {/* Contact */}
              <div className="row">
              <div className="mb-3 d-flex flex-column align-items-start">
                <label htmlFor="Contact" className="col-12 form-label fw-bold text-start">
                  Contact <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="Contact"
                  placeholder="Enter Mobile Number"
                  className="form-control"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              </div>
              

              {/*Gender*/}
              <div className="row">
              <div className='mb-3 d-flex flex-column'>

            <label htmlFor="Gender" className='form-label fw-bold text-start'>Gender<span className="text-danger fw-bold">*</span></label> 

            <div className='container-fluid Gender '>
              <div className="row d-flex justify-content-center">

              <div className='col-4 Option1 form-check d-flex align-items-center'>
            <input
            type='radio'
            name='Radio'
            value='Male'
            required
            checked={gender==="Male"}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            />
            <label className='form-check-label'>Male</label>
            </div>

            <div className=' col-4 Option2 form-check d-flex align-items-center '>
            <input
            type='radio'
            name='Radio'
            required
            value='Female'
            checked={gender==="Female"}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            />
            <label className='form-check-label'>Female</label>
            </div>

            <div className=' col-4 Option3 form-check d-flex align-items-center'>
            <input
            type='radio'
            name='Radio'
            required
            value='Other'
            checked={gender==="Other"}
            onChange={(e)=>{
              setGender(e.target.value)
            }}
            />
            <label className='form-check-label'>Other</label>
            </div>

              </div>                

            </div>

            </div>
              </div>
                          

          {/*Subject*/}
          <div className="row">
          <div className='d-flex flex-column '>

              <label htmlFor="checkbox"className='form-label fw-bold text-start'>Your Best Subject</label>

              <div className=' container-fluid checkbox '>

                <div className="row d-flex justify-content-center">

                <div className=' col-4 form-check  d-flex align-items-center'>
                  <input
                  type='checkbox'
                  name='subject'
                  id="English"
                  checked={subject.English===true}
                  onChange={()=>{
                    handleSub('English')
                  }}
                  />
                  <label className='form-check-label'>
                  English
                  </label>

                </div>

                <div className=' col-4 form-check  d-flex align-items-center'>
                  <input
                  type='checkbox'
                  name='subject'
                  id="Maths"
                  checked={subject.Maths===true}
                  onChange={()=>{
                    handleSub("Maths")
                  }}
                  />
                  <label className='form-check-label'>
                  Maths
                  </label>
                </div>

                <div className='col-4 form-check  d-flex align-items-center'>
                  <input
                  type='checkbox'
                  name='subject'
                  id="Physics"
                  checked={subject.Physics===true}
                  onChange={()=>{
                    handleSub("Physics")
                  }}
                  />
                  <label className='form-check-label'>
                  Physics
                  </label>
                </div>

                </div>

              </div>

              </div>

                </div>
          
          {/*Upload*/}
          <div className="row">
          <div className='d-flex flex-column'>
            <label htmlFor='upload' className='form-label fw-bold text-start'>Upload Resume<span className='text-danger fw-bold'>*</span></label>
           
            <div className='form-control d-flex justify-content-start p-0' >
              <input
             className='form-control m-0'
             id='hidedefault'
            
             type='file'
             ref={uploadref}
             onChange={(e)=>{
              setUpload(e.target.files[0])
             }}
             required
             />
              
            </div>
          </div>
          </div>

          {/*Url*/}
          <div className="row">
          <div className='d-flex flex-column'>
            <label htmlFor='url' className='form-label fw-bold text-start'>Enter URL<span className='text-danger fw-bold'>*</span></label>

            <div className='url'>
             <input
             className='form-control'
             placeholder='Enter URL'
             value={url}
             onChange={(e)=>{
              setUrl(e.target.value)
             }}
             required
             />
            </div>
          </div>

          </div>

          {/*Select Your Choice*/}
          <div className="row">
          <div className='d-flex flex-column'>
            <label htmlFor='url' className='form-label fw-bold text-start col-12'>Select Your Choice</label>
            


        <div className="dropdown w-100">
            <button
                className="btn btn-secondary dropdown-toggle text-start w-100 d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                style={{ whiteSpace: "normal", wordWrap: "break-word" }}
            >
                {option ? option : "Select Your Ans"}
            </button>
            <ul className="dropdown-menu w-100">
                <li className="dropdown-header">Beginners</li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) =>
                           handleSelection(e,"HTML")}
                    >
                        HTML
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) => handleSelection(e,"CSS")}
                    >
                        CSS
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) => handleSelection(e,"JavaScript")}
                    >
                        JavaScript
                    </button>
                </li>
                <li className="dropdown-header">Advance</li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) => handleSelection(e,"React")}
                    >
                        React
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) => handleSelection(e,"Node")}
                    >
                        Node
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) => handleSelection(e,"Express")}
                    >
                        Express
                    </button>
                </li>
                <li>
                    <button
                        className="dropdown-item"
                        onClick={(e) => handleSelection(e,"MongoDB")}
                    >
                        MongoDB
                    </button>
                </li>
            </ul>
        </div>

            
          </div>
          </div>

          {/*About*/}
          <div className="row">
          <div className='d-flex flex-column'>
            <label htmlFor='About' className='form-label fw-bold text-start'>About</label>

            <div className='About'>
             <textarea
             className='form-control'
             placeholder='About Yourself'
             rows={4}
             value={about}
             onChange={(e)=>{
              setAbout(e.target.value)
             }}
             required
             ></textarea>
            </div>
          </div>
          </div>

          {/*Submit OR Reset*/}
          <div className="row">
          <div className='d-flex flex-column '>
            <label htmlFor='buttons' className='form-label fw-bold text-start'>Submit OR Reset</label>

            <div className='buttons d-flex  justify-content-between'>
             <button className='m-1 btn btn-success col-5' onClick={()=>{
              handleReset()
             }}>Reset</button>
             <button className=' m-1 btn btn-success col-5' type='submit' onClick={(e)=>{
              handleSubmit(e)
             }}>Submit</button>
            </div>
          </div>
          </div>



            </form>

            </div>
            
          
        </div>

        

      </div>

    </div>
  );
};

export default FormBase;
