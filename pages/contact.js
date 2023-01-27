import { Hero } from "../components/Hero"


const contact = () => {
  return (
    <div>
        <Hero  heading='Contact'  message='Get in touch with me' />
        <div className="max-w-[1240px] mx-auto py-8">
            <h1 className="text-2xl font-bold text-center p-4">Send a message</h1>
            <form className="max-w-[600px] mx-auto">
              <div className="grid grid-cols-2 gap-2 py-4">
                <input className="border shadow-lg p-4" type='text' placeholder='Name'/>
                <input className="border shadow-lg p-4" type='email' placeholder='Email'/>
              </div>
              <input className="border shadow-lg my-4 p-4  w-full" type='text' placeholder="subject" />
              <textarea className="border shadow-lg my-4 p-4 w-full" placeholder="message" rows='10' cols='30'></textarea>
              <button className="bg-black px-10 py-4 text-white shadow-lg">Send</button>
            </form>
        </div>
    </div>
  )
}

export default contact