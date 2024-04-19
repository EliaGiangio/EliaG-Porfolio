export default function EducationCards({ name, time, degree, description }) {
    return (
        <div className="education-card-div">
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-100">{degree}</h3>
                <p className="mt-1 max-w-2xl font-semibold text-sm leading-6 text-gray-300">{name}</p>
                <p className="mt-1 max-w-2xl font-semibold text-sm leading-6 text-gray-300">{time}</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-4 sm:mt-0">
                            {description}
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
