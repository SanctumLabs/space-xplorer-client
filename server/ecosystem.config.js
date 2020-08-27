module.exports = {
    apps: [
        {
            name: "space-xplorer-client",
            script: "app.js",
            watch: true,
            env: {
                NODE_ENV: "production"
            },
            instances: "max",
            exec_mode: "cluster",
            out_file: "/dev/null",
            error_file: "/dev/null",
            output: "/dev/stdout",
            error: "/dev/stderr",
            exp_backoff_restart_delay: 100,
            time: true
        }
    ]
};
