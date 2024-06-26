import SparklesText from "@/components/magicui/sparkles-text";

export default function NotFound() {
    return (
        <div className="px-6 md:px-40 z-10 w-full flex flex-col justify-center items-center">
            <div className="text-center">
                <SparklesText text="404 Not Found" />
            </div>
        </div>
    )
}