export default function SubOtpBox({
    reference, onDone, goBack, values, setValues, index
}) {
    return( <div>
        <input 
        value={values[index]} 
        ref={reference} 
        onKeyUp={(e) => {
            if (e.key == "Backspace") {
                goBack();
            }
        }} 
        onChange={(e) => {
            const val = e.target.value

            if (val == "0" || val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val  == "9") {
                setValues(e => e.map((x, i) => i === index ? x = val : x));
                onDone();
            }
        }} 
        type="text" 
        className="m-1 w-[50px] h-[60px] rounded-xl bg-black/50 backdrop-blur-md
        outline-none px-5 text-white text-xl"
        />
    </div>
    );
}