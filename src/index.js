document.addEventListener('DOMContentLoaded', () => {

    const start = new CustomEvent("start", {
        detail: {
            color: "green"
        }
    });

    const stop = new CustomEvent("stop", {
        detail: {
            color: "red"
        }
    });

    const night = new CustomEvent("night", {
        detail: {
            color: "yellow"
        }
    });

    const allLights = document.querySelectorAll(".trafficLight");
    let resetBtn = document.querySelector("#Do");

    allLights.forEach(light => {

        light.addEventListener("night", (e) => {
            e.target.classList = `trafficLight ${e.detail.color}`
            light.timer = setInterval(() => light.classList.toggle(e.detail.color), 700);
        });

        light.dispatchEvent(night);
        light.color = "yellow";

        light.addEventListener("stop", (e) => {
            e.target.classList = `trafficLight ${e.detail.color}`;
        })

        light.addEventListener("start", (e) => {
            clearInterval(light.timer);
            e.target.classList = `trafficLight ${e.detail.color}`;
        });

        resetBtn.addEventListener("click", () => {
            clearInterval(light.timer);
            light.color = "yellow";
            light.dispatchEvent(night)
        })

        light.addEventListener("click", () => {
            switch (light.color) {
                case "yellow": light.dispatchEvent(start)
                    light.color = "red";
                    break;
                case "red": light.dispatchEvent(stop)
                    light.color = "green";
                    break;
                case "green": light.dispatchEvent(start)
                    light.color = "red";
                    break;
                default: console.log("Error")
            };

        });

    });

});