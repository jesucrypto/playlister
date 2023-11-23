const arrayUtils = 
{
    shuffle : (array) => 
    {
        array.sort(() => Math.random() - 0.5)
    },

    isEmpty : (array) => array.length === 0
}

export default arrayUtils