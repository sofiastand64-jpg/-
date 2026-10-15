import type {DayOfWeek, Lesson} from "../types";
import {DAYS} from "../types";
import LessonCard from "./LessonCard";

interface DayGroupProps {
    day: DayOfWeek;
    lessons: Lesson[];
    onEdit: (lesson: Lesson)=> void;
}

    export default function DayGroup({ day, lessons}: DayGroupProps){
        const today = new Date();

        const todayIndex = today.getday() === 0 ? 6 : today.getDay() - 1;
        const isToday = DAYS[todayIndex]?.key ===day;
        const dayLabel = DAYS.find((d)) => d.key === day)?.label ?? day;
        return (
            <section className="mb-6">
                <h2
                className={`text-sm front-semibold uppercase tracking-wide mb-3
                    ${isToday ? "text-blue-600" : "text-gray-400"}
                    `}
                    {dayLabel}
                    {isToday && <span className="ml-2 text-xs">(сегодня)</span>}
                    </h2>
                    {lessons.length === 0 ? (
                      <P clcassName="text-sm text-gray-400 italic">Занятий нет! Ура!</p>
                    ) : (
                        lessons.map((lesson) =>{<LessondCard key={lesson.id} Lesson={lesson} />)
                    )}
                 </section>
        );
    }