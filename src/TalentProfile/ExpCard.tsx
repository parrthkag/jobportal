
export const ExpCard = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="bg-mine-shaft-900 rounded-md p-2">
                    <img className="h-7 w-7" src={`/companies/Icons/Google.png`} alt="icon" />
                </div>
                <div>
                    <div className="text-mine-shaft-200 font-semibold">software engineer</div>
                    <div className="text-xs text-mine-shaft-300">
                        Google &#x2022; New york
                    </div>
                </div>
            </div>
            <div className="text-sm text-mine-shaft-200">jan 2022-present</div>
        </div>
    )
}
