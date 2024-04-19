export default function CvCards({ position, company, location, starting, ending, description }) {
    return (
        <div className="cv-card-div">
            <div className="px-4 sm:px-0">
                <h3 className="text-xl font-semibold leading-7 text-gray-100">{position}</h3>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-300">{company}</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-300">Timeframe</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{starting} - {ending}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-300">Location</dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-2 sm:mt-0">{location}</dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-300">Description</dt>
                        <br />
                        {description.map((d, index) => (
                            <dd key={index} className="mt-1 text-sm leading-6 text-gray-100 sm:col-span-4 sm:mt-0">
                                - {d}
                            </dd>
                        ))}
                    </div>
                </dl>
            </div>
        </div>
    )
}
