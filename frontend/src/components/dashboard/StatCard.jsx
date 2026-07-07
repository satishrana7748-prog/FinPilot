function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="
relative
overflow-hidden
group
cursor-pointer
transform
transition-all
duration-500
hover:-translate-y-2
hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]
"
    >
      {/* Background */}

      <div
        className={`absolute inset-0 bg-gradient-to-r ${color}`}
      ></div>

      {/* Decorative Circle */}

      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 group-hover:scale-125 transition duration-500"></div>

      {/* Content */}

      <div className="relative z-10 flex justify-between items-center">

        <div>

          <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">

            {title}

          </p>

          <h1 className="text-4xl font-black mt-4">

            {value}

          </h1>

        </div>

        <div className="text-6xl opacity-90">

          {icon}

        </div>

      </div>

    </div>
  );
}

export default StatCard;