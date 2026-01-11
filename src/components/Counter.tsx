import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
    initValue?: number
    children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {
    const [counter, setCounter] = createSignal(props.initValue ?? 7)

    return (
        <>
            {props.children}
            <h3 class="text-2xl">Value: {counter()}</h3>
            <div class="mt-2">
                <button
                    onClick={() => setCounter(prev => ++prev)}
                    class="font-medium bg-amber-600 hover:bg-amber-500 hover:cursor-pointer rounded-md py-2 px-4 mr-2">+1</button>
                <button
                    onClick={() => setCounter(prev => --prev)}
                    class="font-medium bg-amber-600 hover:bg-amber-500 hover:cursor-pointer rounded-md py-2 px-4 mr-2">-1</button>
            </div>
        </>
    )
}
