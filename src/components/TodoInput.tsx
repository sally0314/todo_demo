import Input from 'components/Input';
import Button from 'components/Button';
import React, {useState} from 'react';
import {Todo} from "contexts/TodoContext";
import {Title} from "components/Title";
import dayjs, {Dayjs} from "dayjs";

interface Props {
    readonly date: Dayjs;
    readonly onAdd?: (todo: Todo) => void;
    readonly onClose?: () => void;
}

const TodoInput = ({date, onAdd, onClose}: Props) => {
    const [newTodo, setNewTodo] = useState<Todo>({
        date,
        title: '',
        description: '',
        createdAt: dayjs(),
    });

    const setNewTodoTitle = (title: string) => {
        setNewTodo((prev) => {
            return {...prev, title, createdAt: dayjs()};
        });
    }

    const setNewTodoDescription = (description: string) => {
        setNewTodo((prev) => {
            return {...prev, description, createdAt: dayjs()};
        });
    }

    const addTodo = () => {
        if(newTodo.title === "") { alert("제목을 입력해 주세요."); return; }
        onAdd && onAdd(newTodo);
        close();
    };

    return (
        <div className="absolute top-0 left-0 bottom-0 right-0 items-center justify-center flex">
            <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-black/20"/>
            <div className="flex items-center justify-center flex-col bg-white p-32 rounded-lg z-10 w-500">
                <Title label="할 일 추가"/>
                <div className="flex items-center justify-center flex-col mt-20">
                    <Input placeholder="제목 추가 (필수)" onChange={(e) => (setNewTodoTitle(e.target.value))}/>
                    <Input placeholder="설명 추가 (옵션)" onChange={(e) => (setNewTodoDescription(e.target.value))}/>
                    <div className="flex items-center justify-center mt-20">
                        <Button
                            label="추가"
                            onClick={() => addTodo()}
                            className="flex items-center justify-center px-16 py-7 mx-5 rounded-md bg-blue-500/80 text-gray-50 hover:text-white hover:bg-blue-500/100"
                        />
                        {onClose && <Button
                            label="취소"
                            onClick={() => onClose()}
                            className="flex items-center justify-center px-16 py-7 mx-5 rounded-md bg-blue-500/10 text-gray-500 hover:text-white hover:bg-blue-500/100"
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoInput;
