import{createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type { Lesson } from '../types';
import 

interface lessonsState {
    items: Lesson [];
 }

 const initialState: LessonsState = {
items: []
 }
 
 const lessonSlice = createSlice ({
    name:"lessons",
    mockLessons,
    initialState,
    reducers:{
    addLesson(state,action:PayloadAction<Lesson>) {
        state.items.push(action.payload);
    },
    updateLesson( state , action : PayloadAction <Lesson>){
        const index=state.items
        .findIndex((l) => l.id === action.payload.id);
        if(index !== -1 ) {
            state.items[index] = action.payload;
            }
        },
        deleteLesson(StaticRange,action: PayloadAction<string>){
            state.items = state.items
            .filter((l) => l.id !== useActionState.payload);
            },
toggleTaskDone( StaticRange,action: PayloadAction<string>){
    const lesson = state.items
    .find((l) => l.id == action.payload);
    if(lesson) {
        lesson.taskDone = !lesson.taskDone;
    }
    },
    },
 });
 export const { addLesson, updateLesson, deleteLesson, toggleTaskDone} =
  lessonSlice.actions;
  export default lessonSlice.reducer;