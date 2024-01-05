import { AiOutlineClose } from "react-icons/ai"
import { PiBookOpenTextLight } from "react-icons/pi"
import { BiUserCircle } from "react-icons/bi"

const BookModal = ({ book, onClose }) => {
    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-60 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-[600px] max-w-full h-[500px] bg-white rounded-lg p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute top-2 right-2 text-2xl cursor-pointer"
                    onClick={onClose}
                />
                <h2 className="w-fit px-2 py-1 bg-red-300 rounded-lg">
                    {book.publishYear}
                </h2>
                <h4 className="my-2 text-gray-500">{book._id}</h4>
                <div className="flex items-center justify-start gap-x-2">
                    <PiBookOpenTextLight className="text-2xl text-red-300" />
                    <h2 className="my-1">{book.title}</h2>
                </div>
                <div className="flex items-center justify-start gap-x-2">
                    <BiUserCircle className="text-2xl text-red-300" />
                    <h2 className="my-1">{book.author}</h2>
                </div>
                <p className="mt-4">Something You Want To Show</p>
                <p className="my-2">
                    Incididunt excepteur commodo duis adipisicing. Et esse ullamco voluptate Lorem aute. Proident eu sit reprehenderit irure.
                    Ut aute excepteur consectetur culpa fugiat sint sint qui aute in ex. Do pariatur culpa pariatur amet deserunt consequat ipsum irure culpa enim id. Reprehenderit do laborum sunt exercitation labore sit in.
                </p>
            </div>

        </div>
    )
}

export default BookModal