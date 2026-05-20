function EditForm({
    user,
    setUser,
    setShowForm,
}) {

    const handleChange = (e) => {

        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value,
        });
    };

    return (

        <div className="w-full max-w-[700px] bg-[#111827]/40  backdrop-blur-lg rounded-3xl p-8 shadow-2xl text-white ">

            <h1 className="text-3xl font-bold text-center mb-8 ">Edit Profile</h1>

            <form className=" flex flex-col gap-5">

                {/* IMAGE */}

                <img src={user.image} alt="" className=" w-32 h-32 rounded-full object-cover border-4 border-violet-500 mx-auto "       />

                {/* NAME */}

                <input
                    label="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className=" p-4 rounded-xl bg-[#0F172A] outline-none " />

                {/* EMAIL */}

                <input
                    label="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className=" p-4 rounded-xl bg-[#0F172A] outline-none "   />

                {/* PHONE */}

                <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone"
                    className=" p-4 rounded-xl bg-[#0F172A] outline-none " />

                {/* SKILLS */}

                <input
                    type="text"
                    name="skills"
                    value={user.skills}
                    onChange={handleChange}
                    placeholder="Enter Skills"
                    className=" p-4 rounded-xl bg-[#0F172A] outline-none " />

                {/* IMAGE URL */}

                <input
                    type="text"
                    name="image"
                    value={user.image}
                    onChange={handleChange}
                    placeholder="Paste Image URL"
                    className=" p-4 rounded-xl bg-[#0F172A] outline-none " />

                {/* BUTTON */}

                <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className=" mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-semibold hover:scale-105 transition duration-300 ">
                    Save Changes
                </button>

            </form>

        </div>
    );
}

export default EditForm;