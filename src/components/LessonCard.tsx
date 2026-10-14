import type { Lesson } from "../types";

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <div className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{lesson.subject}</h3>
          <p className="text-sm text-gray-500">{lesson.teacher}</p>
        </div>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
          {lesson.startTime} — {lesson.endTime}
        </span>
      </div>
      <p className="text-sm text-gray-600 mt-2">Кабинет: {lesson.room}</p>
      {lesson.task && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-1">Задание</p>
          <p
            className={`text-smm
            ${
              lesson.taskDone ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {lesson.task}
          </p>
        </div>
      )}
    </div>
  );
}
