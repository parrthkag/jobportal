import { Button, TextInput } from "@mantine/core"

export const Suscribe = () => {
    return (
        <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
            <div className="text-4xl text-mine-shaft-100 w-2/5 font-semibold text-center">
                Never Wants to Miss Any <span className="text-bright-sun-400">Job News</span></div>

            <div className="flex gap-4 py-2 px-3 bg-mine-shaft-700 rounded-xl items-center">
                <TextInput
                    className="[&_input]:text-mine-shaft-100 font-semibold"
                    variant="unstyled"
                    placeholder="your@gmail.com"
                    size="xl"
                />
                <Button className="!rounded-lg " size="lg" color="bright-sun.4" variant="filled">Subscribe</Button>
            </div>

        </div>

    )
}
