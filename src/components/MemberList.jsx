import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const MembersList = () => {
    const TABLE_HEAD = ["Name", "Department", "Shift", "Mail"];

    const TABLE_ROWS = [
        { name: "Tino Britty J", department: "B.Sc CS - III", shift: "I",mail:'' },
        { name: "John Samuel", department: "B.Sc IT - III", shift: "II" },
        { name: "Pravin B", department: "B.Sc CS & DA - II", shift: "I" },
        { name: "Kanishka C", department: "B.Sc CS (AI & DS) - II", shift: "II" },
    ];

    return (
        <div className="container mx-auto py-4 md:p-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-teal-400 mb-8 text-center relative">
                Members List
                <span className="block h-1 w-28 md:w-44 bg-yellow-500 mt-2 mx-auto rounded"></span>
            </h2>

            {/* Table  */}
            <div className="overflow-x-auto rounded-md md:rounded-lg">
                <table className="min-w-full bg-gray-900 text-white rounded-lg shadow-lg border-collapse">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="p-4 border-b border-gray-700 bg-gray-800 text-white text-left text-sm md:text-lg font-bold">
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, department, shift , mail }, index) => (
                            <tr key={name} className={`${index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}`}>
                                <td className="p-4 border-t border-gray-700 text-xs md:text-base">{name}</td>
                                <td className="p-4 border-t border-gray-700 text-xs md:text-base">{department}</td>
                                <td className="p-4 border-t border-gray-700 text-xs md:text-base">{shift}</td>
                                <td className="p-4 border-t border-gray-700">
                                    < a href={`mailto:${mail}`} className="text-teal-500 text-xs hover:text-teal-400 flex items-center">
                                        <FaEnvelope className="mr-2" /> Mail
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MembersList;
