import GradualSpacing from "@/components/magicui/gradual-spacing";
import DotPattern from "@/components/magicui/dot-pattern";
import { useState } from "react";
import Spinner from "@/components/Spinner";
import { toast, Toaster } from "sonner";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await fetch('https://portfolioforms.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json();
      if(response.status == 400){

        throw new Error("Invalid Form Data")
      } 
      
      if(data.success) {
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        toast.success(data.message)
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(error.message)
    }finally {
      setLoading(false)
    }
  }
  return (
    <>
      <DotPattern className="inset-0 h-full w-full" />
      
      <div className="min-h-screen bg-transparent py-6 flex flex-col justify-center sm:py-12">
      <Toaster position="bottom-right" reverseOrder={false} />
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <GradualSpacing text={"Contact Me"} className={"text-3xl font-bold"}/>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      id="name"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Name"
                      required
                      value={formData.name}
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      value={formData.email}
                      autoComplete="off"
                      id="email"
                      name="email"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      type="email"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      autoComplete="off"
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      name="message"
                      className="peer placeholder-transparent h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      required
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Message
                    </label>
                  </div>
                  <div className="relative">
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-2 py-1 flex justify-center items-center">
                      {loading ? <Spinner /> : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
