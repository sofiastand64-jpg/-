import type { Lesson } from "../types";

interface LessonCardProps {
    lesson: Lesson
    }

export default function LessonCard({lesson}: LessonCardProps) {
    return (
        
        <div className="bg-white rounded-2xl p-4 mb-3 snadow-sn border border-gray-100">
            <div>
            <h3 className="text-lg font-bold text-gray-900"> {lesson.subject} </h3>
            <p className="text-sm text-gray-500">{lesson.subject}</p>
            </div>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
           {lesson.startTime} - {lesson.endTime}
            </span>
            </div>
                <p className="text-sm text-gray-600 mt-2"> Кабинет: { lesson.room}</p>
            </div>

            );
    }