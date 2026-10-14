import { DAYS} from "../types";
import type { Lesson } from "../types";;
import DayGroup from "../components/DayGroup";

const mockLessons: Lesson[]= [
    {
          id:"1",
          subject: "Классный час",
          teacher:"Буйницкая А.М",
          room:"47/1",
          day:"monday",
          startTime:"8:30",
          endTime:"10:10",
          task:"",
          taskDone:false,
    },
{
          id:"2",
          subject: "МДК 05.01 Проектирование",
          teacher:"Буйницкий П.Е",
          room:"40",
          day:"monday",
          startTime:"10:20",
          endTime:"12:00",
          task:"",
          taskDone:false,
    },
{
          id:"3",
          subject: "03.02 Управление проектами",
          teacher:"Буйницкий П.Е",
          room:"40",
          day:"monday",
          startTime:"13:00",
          endTime:"14:40",
          task:"Практическое задание",
          taskDone:false,
    },
{
          id:"4",
          subject: "Физическая кульутра",
          teacher:"Кучеренко Н.С",
          room:"40",
          day:"monday",
          startTime:"14:50",
          endTime:"16:30",
          task:"Сдача норматива",
          taskDone:false,
    },


    rt default function ScheduleScreen() {
        turn (
        <div className="min-h-screen bg-gray-50 ph-24">
            <header className ="bg-white border-b border-gray-100 px-4 py-4 sticky top-0 z-10" 
            <h1 className="text-xl font-bold text-gray-900">MySchedule></h1>
            </header>
        </div>
        )
