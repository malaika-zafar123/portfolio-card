function Card({
  user,
  setShowForm,
}) {

  return (

    <div className=" w-2xl m-3 bg-[#111827]/50 backdrop-blur-lg rounded-3xl p-8 shadow-2xl text-white flex flex-col items-center gap-4">
      {/* IMAGE */}

      <img
         src={
    user.image
      ? user.image
      : "https://unsplash.com/images"
  }
        alt=""
        className="
        w-32
        h-32
        rounded-full
        object-cover
        border-4
        border-violet-500
        "
      />

      {/* NAME */}

      <h1 className="
      text-2xl
      font-bold
      ">
        {user.name}
      </h1>

      {/* ROLE */}

      <p className="text-gray-300">
        Frontend Developer
      </p>

      {/* EMAIL */}

      <div className="
      w-full
      bg-[#0F172A]
      p-4
      rounded-xl
      ">

        <p className="text-gray-400">
          Email
        </p>

        <p className="mt-1">
          {user.email}
        </p>

      </div>

      {/* PHONE */}

      <div className="
      w-full
      bg-[#0F172A]
      p-4
      rounded-xl
      ">

        <p className="text-gray-400">
          Phone
        </p>

        <p className="mt-1">
          {user.phone}
        </p>

      </div>

      {/* SKILLS */}

      <div className="
      w-full
      bg-[#0F172A]
      p-4
      rounded-xl
      ">

        <p className="text-gray-400">
          Skills
        </p>

        <p className="mt-1">
          {user.skills}
        </p>

      </div>

      {/* BUTTON */}

      <button
        onClick={() => setShowForm(true)}
        className="
        w-full
        mt-3
        px-6
        py-3
        rounded-xl
        bg-gradient-to-r
        from-violet-600
        to-fuchsia-500
        text-white
        font-semibold
        hover:scale-105
        transition
        duration-300
        "
      >
        Edit Profile
      </button>

    </div>
  );
}

export default Card;