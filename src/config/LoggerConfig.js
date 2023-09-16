module.exports = (winston,winstonFormat)=>{
    let root = process.env.LOGGER_ROOT_DIR;
    let info_dir = root + "STDOUT/";
    const myFormat=winstonFormat.printf(({level,message,timestamp})=>{
        let formatLog = `{"level": "${level}","timestamp":"${timestamp}","message":"${message}"}`
        return formatLog;
    });

    return winston.createLogger({
        level:"info",
        format:winstonFormat.combine(
            winstonFormat.timestamp({format:'YYYY-MM-DD hh:mm:ss'}),
            myFormat
        ),
        exceptionHandlers:[
            new winston.transports.File({filename:root+'app_exceptions.log'})
        ],
        transports:[
            new winston.transports.Console(),
            new winston.transports.DailyRotateFile({
                dirname: info_dir,
                filename: 'JUST_BUY_APP_%DATE%.log',
                datePattern: 'YYYY-MM-DD',
            })
        ]
    })
}