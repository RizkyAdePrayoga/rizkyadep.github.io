import './service.jsx';
import IconDokter from "./assets/dokter.png";
import IconAmbulance from "./assets/ambulance.png";
import IconSteth from "./assets/steth.png";
import IconKit from "./assets/kit.png";
import IconRs from "./assets/rs.png";
import IconPc from "./assets/pc.png";
import IconDok from "./assets/dok.jpg";





function App() {
  const menus = ["Home", "Login", "Register", "Services"];
  return (
    <div>
 <div className="h-[800px] bg-cyan-200 bg-cover border-2 border-slate-500 overflow-hidden bg-blend-screen ">


      <header className="bg-transparant absolute top-0 left-0 w-full flex items-center z-10 ">
    <div className="container">
        <div className="flex items-center justify-between relative">
            <div className="px-4">
                <a href="#home" className="font-bold text-4xl lg:text-4xl text-dark block py-6">MedLab<span className="text-red-600">+</span></a>                
            </div>
            <div className="flex items-center px-4">
                <button id="hamburger" nameName="hamburger" type="button" className="block absolute right-4 lg:hidden">
                    <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                    <span className="hamburger-line transition duration-300 ease-in-out"></span>
                    <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </button>

                <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                    <ul className="block lg:flex">
                        <li className="group">
                            <a href="index.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                        </li>
                        <li className="group">
                            <a href="login.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Login</a>
                        </li>
                        <li className="group">
                            <a href="register.html" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Register</a>
                        </li>
                        <li className="group">
                            <a href="service.jsx" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Services</a>
                        </li>
                    </ul>
                </nav>
    
            </div>
        </div>
    </div>
    </header>
    
 

    
    <main className="container max-w-5xl mx-auto ">
    <section id="home" className="pt-36 ">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full  px-4">
                    <h1 className="block text-center font-bold text-dark text-5xl lg:text-center lg:text-7xl m-[147px]">MedLab<span className="text-red-600">+</span><span className="block font-semibold text-dark text-3xl lg:text-6xl lg:text-center">HEALTHCARE AT YOUR HOUSE</span></h1>
                    <h2 className="font-medium text-slate-500 text-2xl text-center lg:text-center lg:text-3xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                </div>
            
                 
            </div>
        </div>
    </section>
    
    </main>
    
    </div>
    <script src="src/script.js"></script>
    <div className="lg:h-[2000px] h:-[2500px] w-full bg-gradient-to-tr from-pink-300 via-purple-400 from-{bg-blue-400} to-orange-300">
    <section id="services" className="pt-36 pb-16 ">
                <div className="container">
                    <div className="w-full px-4">
                        <div className="max-w-xl mx-auto text-center mb-16">
                            <h1 className="font-bold text-5xl lg:text-7xl text-dark mb-2 ">Services</h1>
                            <h2 className="font-bold text-dark text-3xl lg:text-4xl mb-4 m-20">Our Services</h2>
                            <p className="font-medium text-md text-2xl lg:text-2xl text-slate-500 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, sint quaerat laudantium aperiam eos aliquid.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src={IconDokter} alt="icon-dokter" width="w-full"></img>
                            </div>
                            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Medical Counseling</h3>
                            <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet.</p>
                        </div>    

                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src={IconAmbulance} alt="icon-ambulance" width="w-full"></img>
                            </div>
                            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Medical Counseling</h3>
                            <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet.</p>
                        </div>    
                

                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src={IconSteth} alt="icon-steth" width="w-full"></img>
                            </div>
                            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Medical Counseling</h3>
                            <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet.</p>
                        </div>    
                

                        <div className="mb-12 p-4 md:w-1/2">
                            <div className="rounded-md shadow-md overflow-hidden">
                                <img src={IconKit} alt="icon-kit" width="w-full"></img>
                            </div>
                            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Medical Counseling</h3>
                            <p className="font-medium text-base text-slate-500">Lorem ipsum dolor sit amet.</p>
                        </div>
                        
                            
                
                </div>
    </section>
    </div>      

    <div className="h-[1150px] lg:h-[1000px] bg-dark">
    <section id="home" className="pt-36">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2 bg-sky-700 bg-cover border-2 border-slate-500 overflow-hidden bg-blend-screen ">
                     <div>

                         <a href="register.html" className="font-semibold text-dark text-sm lg:text-center  m-2 ">Create New Account Here</a>
 
                         <h5 className="block text-center font-semibold text-dark text-4xl lg:text-5xl">Log In</h5>

                    </div>

                    <div className="m-5 max-w-lg border bg-white border-slate-200 rounder-xl mx-auto shadow-md font-inter p-5">
                            <form action="">
                                <label for="">
                                    <span className="block font-semibold mb-1 text-dark after:content-['*'] after:text-red-500">Email</span>
                                    <input type="email" id="email" />
                                    <input type="email" placeholder="masukkan email.." className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-l focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"/>
                                <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">Email Tidak Valid</p>
                                </label>
                            </form>
                    </div>

                    <div className="max-w-lg border bg-white border-slate-200 rounder-xl mx-auto shadow-md font-inter p-5">
                            <form action="">
                                <label for="">
                                    <span className="block font-semibold mb-1 text-dark">Password</span>
                                    <input type="password" id="password" />
                                    <input type="password" placeholder="masukkan password.." className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-l focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-500 invalid:focus:ring-pink-700 invalid:focus:border-pink-700"/>
                                    <p className="text-sm m-1 text-red-600  ">Forgot Password?</p>
                                </label>
                            </form>
                    </div>

                    <a href="#" className="block bg-cyan-300 text-center text-dark text-2xl lg:text-center lg:text-3xl m-5 py-3 px-20 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Sign In</a>
                        <h5 className="font-semibold text-dark text-sm lg:text-center m-10 text-center">Or With</h5>

               </div>
               <div className="w-full self-end px-4 lg:w-1/2">
                <div className="relative mt-10">
                    <img src={IconRs} alt="rs" class="max-w-full mx-auto"></img>
                </div>
            
            </div> 
            </div>
        </div>
    </section>

    </div>

    <div className="h-[1300px] lg:h-[1000px] bg-black">
    <section id="home" className="pt-36">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2 bg-sky-700 bg-cover border-2 border-slate-500 overflow-hidden bg-blend-screen ">
                     <div>
 
                         <h5 className="block text-dark text-4xl lg:text-5xl underline">Register</h5>

                     </div>

                     <div className="m-5 max-w-lg border bg-white border-slate-200 rounder-xl mx-auto shadow-md font-inter ">
                            <form action="">
                                <label for="">
                                    <input type="email" id="email" />
                                    <input type="email" placeholder="Email" className="text-right px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-l focus:ring-sky-500 focus:border-sky-500"/>
                                </label>
                            </form>
                     </div>

                     <div className="max-w-lg border bg-white border-slate-200 rounder-xl mx-auto shadow-md font-inter ">
                            <form action="">
                                <label for="">
                                    <input type="password" id="password" />
                                    <input type="password" placeholder="Password" className="text-right px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-l focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-500 invalid:focus:ring-pink-700 invalid:focus:border-pink-700"/>
                                </label>
                            </form>
                     </div>

                     <div class="m-5 max-w-lg border bg-white border-slate-200 rounder-xl mx-auto shadow-md font-inter ">
                            <form action="">
                                <label for="">
                                    <input type="text" id="username" />
                                    <input type="text" placeholder="Username" class="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-l focus:ring-sky-500 focus:border-sky-500"/>
                                </label>
                            </form>
                     </div>

                     <form class="w-full max-w-lg mx-auto">
                            <div class="flex flex-wrap mx-auto mb-6 ">
                              <div class="w-full md:w-1/2 mb-6 md:mb-0">                            
                                <input class="appearance-none block w-full bg-white rounded py-2 px-3 " id="first-name" type="text" placeholder="First Name"></input>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                              </div>
                              <div class="w-full md:w-1/2">
                                <input class="appearance-none block w-full bg-white rounded py-2 px-3 " id="last-name" type="text" placeholder="Last Name"></input>
                              </div>
                            </div>
                     </form>

                     <div class="m-5 max-w-lg border bg-white border-slate-200 rounder-xl mx-auto shadow-md font-inter ">
                            <form action="">
                                <label for="">
                                    <input type="number" id="number" />
                                    <input type="number" placeholder="Phone" class="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-l focus:rin-sky-500 focus:border-sky-500"/>
                                </label>
                            </form>
                     </div>

                     <div class="text-slate-300">
                            <input type="checkbox" />
                          <h5> By clicking you agree to accept <span class="text-dark"> our terms & conditions.</span></h5>
                    </div>

                    <a href="#" class="block bg-cyan-300 text-center text-dark text-2xl lg:text-center lg:text-3xl m-5 py-3 px-20 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Register</a>
                       
                       <h5 class="font-semibold text-sm text-slate-300 my-10 ">Already Have Account? <a href="login.html" span class="text-dark">Sign In</a></h5>

                </div>
                <div class="w-full self-end px-4 lg:w-1/2">
                <div class="relative mt-10">
                    <img src={IconPc} alt="pc" class="max-w-full mx-auto "></img>
                </div>
            
            </div> 
            </div>
        </div>
    </section>    

    </div>

    </div>
    
  );
}

export default App;
