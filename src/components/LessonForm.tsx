import { useState, useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addLesson, updateLesson } from '../store/lessonsSlice';
import { DAYS, type DayOfWeek, type Lesson } from '../types';

interface LessonFormProps {
  editingLesson: Lesson | null;
  onClose: () => void;
}

const emptyLesson = (): Lesson => ({
  id: crypto.randomUUID(),
  subject: '',
  teacher: '',
  room: '',
  day: 'monday',
  startTime: '08:30',
  endTime: '10:10',
  task: '',
  taskDone: false,
});

export default function LessonForm({
  editingLesson,
  onClose,
}: LessonFormProps) {
  const dispatch = useAppDispatch();
  const [lesson, setLesson] = useState<Lesson>(emptyLesson());

  // Если редактируем — заполнить форму данными урока
  useEffect(() => {
    if (editingLesson) {
      setLesson(editingLesson);
    } else {
      setLesson(emptyLesson());
    }
  }, [editingLesson]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!lesson.subject.trim()) return;

    if (editingLesson) {
      dispatch(updateLesson(lesson));
    } else {
      dispatch(addLesson(lesson));
    }
    onClose();
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <select
          className="w-full border border-gray-200 rounded-lg px-3 py-2"
          value={lesson.day}
          onChange={(event) =>
            setLesson({ ...lesson, day: event.target.value as DayOfWeek })
          }
        >
          {DAYS.map((d) => (
            <option key={d.key} value={d.key}>
              {d.label}
            </option>
          ))}
        </select>

        <div className="flex gap-2 mt-2">
          <input
            type="time"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
            value={lesson.startTime}
            onChange={(event) =>
              setLesson({ ...lesson, startTime: event.target.value })
            }
          />
          <input
            type="time"
            className="flex-1 border border-gray-200 rounded-lg px-3 py-2"
            value={lesson.endTime}
            onChange={(event) =>
              setLesson({ ...lesson, endTime: event.target.value })
            }
          />
        </div>

        <div className="flex gap-2 mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Сохранить
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}