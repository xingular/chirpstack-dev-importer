import prompts from "prompts";

async function promptName() {
    const prompt = await prompts({
        type: "text",
        name: "name",
        message: "Please enter a name",
        initial: "xingular-",
    });
    return prompt.name;
}

async function promptStartNumber() {
    const validateNumber = (value: any) => {
        return isNaN(value) || value == '-Infinity' ? 'Please enter a valid starting number' : true;
    };

    const prompt = await prompts({
        type: 'number',
        name: 'startNumber',
        message: 'Please enter a starting number',
        initial: 1,
        validate: validateNumber,
    });

    return prompt.startNumber;
}

export {
    promptName,
    promptStartNumber
}