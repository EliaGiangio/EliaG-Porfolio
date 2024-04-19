import React, { useState } from 'react';

function FeaturesList({ project }) {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;

    const nextPage = () => {
        setStartIndex(startIndex + itemsPerPage);
    };

    const prevPage = () => {
        setStartIndex(Math.max(0, startIndex - itemsPerPage));
    };

    return (
        <div>
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-800 lg:max-w-none">
                {project.features.slice(startIndex, startIndex + itemsPerPage).map((feature, index) => (
                    <div key={index} className="relative pl-9">
                        <p className="inline text-gray-800"> {feature}</p>
                    </div>
                ))}
            </dl>
            <div className="button-features">
                <button
                    onClick={prevPage}
                    disabled={startIndex === 0}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <p> {(startIndex + itemsPerPage) / 3}/{(project.features.length) / 3} </p>
                <button
                    onClick={nextPage}
                    disabled={startIndex + itemsPerPage >= project.features.length}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </button>
            </div>
        </div>
    );
}

export default FeaturesList;
