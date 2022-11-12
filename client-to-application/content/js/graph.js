/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5309.0, "minX": 0.0, "maxY": 60863.0, "series": [{"data": [[0.0, 5309.0], [0.1, 5309.0], [0.2, 5309.0], [0.3, 5309.0], [0.4, 5309.0], [0.5, 5309.0], [0.6, 5309.0], [0.7, 5309.0], [0.8, 5309.0], [0.9, 5309.0], [1.0, 5893.0], [1.1, 5893.0], [1.2, 5893.0], [1.3, 5893.0], [1.4, 5893.0], [1.5, 5893.0], [1.6, 5893.0], [1.7, 5893.0], [1.8, 5893.0], [1.9, 5893.0], [2.0, 6491.0], [2.1, 6491.0], [2.2, 6491.0], [2.3, 6491.0], [2.4, 6491.0], [2.5, 6491.0], [2.6, 6491.0], [2.7, 6491.0], [2.8, 6491.0], [2.9, 6491.0], [3.0, 6527.0], [3.1, 6527.0], [3.2, 6527.0], [3.3, 6527.0], [3.4, 6527.0], [3.5, 6527.0], [3.6, 6527.0], [3.7, 6527.0], [3.8, 6527.0], [3.9, 6527.0], [4.0, 6678.0], [4.1, 6678.0], [4.2, 6678.0], [4.3, 6678.0], [4.4, 6678.0], [4.5, 6678.0], [4.6, 6678.0], [4.7, 6678.0], [4.8, 6678.0], [4.9, 6678.0], [5.0, 6736.0], [5.1, 6736.0], [5.2, 6736.0], [5.3, 6736.0], [5.4, 6736.0], [5.5, 6736.0], [5.6, 6736.0], [5.7, 6736.0], [5.8, 6736.0], [5.9, 6736.0], [6.0, 6762.0], [6.1, 6762.0], [6.2, 6762.0], [6.3, 6762.0], [6.4, 6762.0], [6.5, 6762.0], [6.6, 6762.0], [6.7, 6762.0], [6.8, 6762.0], [6.9, 6762.0], [7.0, 6827.0], [7.1, 6827.0], [7.2, 6827.0], [7.3, 6827.0], [7.4, 6827.0], [7.5, 6827.0], [7.6, 6827.0], [7.7, 6827.0], [7.8, 6827.0], [7.9, 6827.0], [8.0, 7117.0], [8.1, 7117.0], [8.2, 7117.0], [8.3, 7117.0], [8.4, 7117.0], [8.5, 7117.0], [8.6, 7117.0], [8.7, 7117.0], [8.8, 7117.0], [8.9, 7117.0], [9.0, 7467.0], [9.1, 7467.0], [9.2, 7467.0], [9.3, 7467.0], [9.4, 7467.0], [9.5, 7467.0], [9.6, 7467.0], [9.7, 7467.0], [9.8, 7467.0], [9.9, 7467.0], [10.0, 9610.0], [10.1, 9610.0], [10.2, 9610.0], [10.3, 9610.0], [10.4, 9610.0], [10.5, 9610.0], [10.6, 9610.0], [10.7, 9610.0], [10.8, 9610.0], [10.9, 9610.0], [11.0, 12404.0], [11.1, 12404.0], [11.2, 12404.0], [11.3, 12404.0], [11.4, 12404.0], [11.5, 12404.0], [11.6, 12404.0], [11.7, 12404.0], [11.8, 12404.0], [11.9, 12404.0], [12.0, 12799.0], [12.1, 12799.0], [12.2, 12799.0], [12.3, 12799.0], [12.4, 12799.0], [12.5, 12799.0], [12.6, 12799.0], [12.7, 12799.0], [12.8, 12799.0], [12.9, 12799.0], [13.0, 13150.0], [13.1, 13150.0], [13.2, 13150.0], [13.3, 13150.0], [13.4, 13150.0], [13.5, 13150.0], [13.6, 13150.0], [13.7, 13150.0], [13.8, 13150.0], [13.9, 13150.0], [14.0, 13169.0], [14.1, 13169.0], [14.2, 13169.0], [14.3, 13169.0], [14.4, 13169.0], [14.5, 13169.0], [14.6, 13169.0], [14.7, 13169.0], [14.8, 13169.0], [14.9, 13169.0], [15.0, 13197.0], [15.1, 13197.0], [15.2, 13197.0], [15.3, 13197.0], [15.4, 13197.0], [15.5, 13197.0], [15.6, 13197.0], [15.7, 13197.0], [15.8, 13197.0], [15.9, 13197.0], [16.0, 13427.0], [16.1, 13427.0], [16.2, 13427.0], [16.3, 13427.0], [16.4, 13427.0], [16.5, 13427.0], [16.6, 13427.0], [16.7, 13427.0], [16.8, 13427.0], [16.9, 13427.0], [17.0, 13877.0], [17.1, 13877.0], [17.2, 13877.0], [17.3, 13877.0], [17.4, 13877.0], [17.5, 13877.0], [17.6, 13877.0], [17.7, 13877.0], [17.8, 13877.0], [17.9, 13877.0], [18.0, 13897.0], [18.1, 13897.0], [18.2, 13897.0], [18.3, 13897.0], [18.4, 13897.0], [18.5, 13897.0], [18.6, 13897.0], [18.7, 13897.0], [18.8, 13897.0], [18.9, 13897.0], [19.0, 13931.0], [19.1, 13931.0], [19.2, 13931.0], [19.3, 13931.0], [19.4, 13931.0], [19.5, 13931.0], [19.6, 13931.0], [19.7, 13931.0], [19.8, 13931.0], [19.9, 13931.0], [20.0, 15399.0], [20.1, 15399.0], [20.2, 15399.0], [20.3, 15399.0], [20.4, 15399.0], [20.5, 15399.0], [20.6, 15399.0], [20.7, 15399.0], [20.8, 15399.0], [20.9, 15399.0], [21.0, 17170.0], [21.1, 17170.0], [21.2, 17170.0], [21.3, 17170.0], [21.4, 17170.0], [21.5, 17170.0], [21.6, 17170.0], [21.7, 17170.0], [21.8, 17170.0], [21.9, 17170.0], [22.0, 17933.0], [22.1, 17933.0], [22.2, 17933.0], [22.3, 17933.0], [22.4, 17933.0], [22.5, 17933.0], [22.6, 17933.0], [22.7, 17933.0], [22.8, 17933.0], [22.9, 17933.0], [23.0, 18082.0], [23.1, 18082.0], [23.2, 18082.0], [23.3, 18082.0], [23.4, 18082.0], [23.5, 18082.0], [23.6, 18082.0], [23.7, 18082.0], [23.8, 18082.0], [23.9, 18082.0], [24.0, 18220.0], [24.1, 18220.0], [24.2, 18220.0], [24.3, 18220.0], [24.4, 18220.0], [24.5, 18220.0], [24.6, 18220.0], [24.7, 18220.0], [24.8, 18220.0], [24.9, 18220.0], [25.0, 18419.0], [25.1, 18419.0], [25.2, 18419.0], [25.3, 18419.0], [25.4, 18419.0], [25.5, 18419.0], [25.6, 18419.0], [25.7, 18419.0], [25.8, 18419.0], [25.9, 18419.0], [26.0, 18446.0], [26.1, 18446.0], [26.2, 18446.0], [26.3, 18446.0], [26.4, 18446.0], [26.5, 18446.0], [26.6, 18446.0], [26.7, 18446.0], [26.8, 18446.0], [26.9, 18446.0], [27.0, 19104.0], [27.1, 19104.0], [27.2, 19104.0], [27.3, 19104.0], [27.4, 19104.0], [27.5, 19104.0], [27.6, 19104.0], [27.7, 19104.0], [27.8, 19104.0], [27.9, 19104.0], [28.0, 19114.0], [28.1, 19114.0], [28.2, 19114.0], [28.3, 19114.0], [28.4, 19114.0], [28.5, 19114.0], [28.6, 19114.0], [28.7, 19114.0], [28.8, 19114.0], [28.9, 19114.0], [29.0, 19162.0], [29.1, 19162.0], [29.2, 19162.0], [29.3, 19162.0], [29.4, 19162.0], [29.5, 19162.0], [29.6, 19162.0], [29.7, 19162.0], [29.8, 19162.0], [29.9, 19162.0], [30.0, 19617.0], [30.1, 19617.0], [30.2, 19617.0], [30.3, 19617.0], [30.4, 19617.0], [30.5, 19617.0], [30.6, 19617.0], [30.7, 19617.0], [30.8, 19617.0], [30.9, 19617.0], [31.0, 24305.0], [31.1, 24305.0], [31.2, 24305.0], [31.3, 24305.0], [31.4, 24305.0], [31.5, 24305.0], [31.6, 24305.0], [31.7, 24305.0], [31.8, 24305.0], [31.9, 24305.0], [32.0, 25035.0], [32.1, 25035.0], [32.2, 25035.0], [32.3, 25035.0], [32.4, 25035.0], [32.5, 25035.0], [32.6, 25035.0], [32.7, 25035.0], [32.8, 25035.0], [32.9, 25035.0], [33.0, 25431.0], [33.1, 25431.0], [33.2, 25431.0], [33.3, 25431.0], [33.4, 25431.0], [33.5, 25431.0], [33.6, 25431.0], [33.7, 25431.0], [33.8, 25431.0], [33.9, 25431.0], [34.0, 25519.0], [34.1, 25519.0], [34.2, 25519.0], [34.3, 25519.0], [34.4, 25519.0], [34.5, 25519.0], [34.6, 25519.0], [34.7, 25519.0], [34.8, 25519.0], [34.9, 25519.0], [35.0, 25548.0], [35.1, 25548.0], [35.2, 25548.0], [35.3, 25548.0], [35.4, 25548.0], [35.5, 25548.0], [35.6, 25548.0], [35.7, 25548.0], [35.8, 25548.0], [35.9, 25548.0], [36.0, 25923.0], [36.1, 25923.0], [36.2, 25923.0], [36.3, 25923.0], [36.4, 25923.0], [36.5, 25923.0], [36.6, 25923.0], [36.7, 25923.0], [36.8, 25923.0], [36.9, 25923.0], [37.0, 26088.0], [37.1, 26088.0], [37.2, 26088.0], [37.3, 26088.0], [37.4, 26088.0], [37.5, 26088.0], [37.6, 26088.0], [37.7, 26088.0], [37.8, 26088.0], [37.9, 26088.0], [38.0, 26171.0], [38.1, 26171.0], [38.2, 26171.0], [38.3, 26171.0], [38.4, 26171.0], [38.5, 26171.0], [38.6, 26171.0], [38.7, 26171.0], [38.8, 26171.0], [38.9, 26171.0], [39.0, 26452.0], [39.1, 26452.0], [39.2, 26452.0], [39.3, 26452.0], [39.4, 26452.0], [39.5, 26452.0], [39.6, 26452.0], [39.7, 26452.0], [39.8, 26452.0], [39.9, 26452.0], [40.0, 26989.0], [40.1, 26989.0], [40.2, 26989.0], [40.3, 26989.0], [40.4, 26989.0], [40.5, 26989.0], [40.6, 26989.0], [40.7, 26989.0], [40.8, 26989.0], [40.9, 26989.0], [41.0, 28702.0], [41.1, 28702.0], [41.2, 28702.0], [41.3, 28702.0], [41.4, 28702.0], [41.5, 28702.0], [41.6, 28702.0], [41.7, 28702.0], [41.8, 28702.0], [41.9, 28702.0], [42.0, 30285.0], [42.1, 30285.0], [42.2, 30285.0], [42.3, 30285.0], [42.4, 30285.0], [42.5, 30285.0], [42.6, 30285.0], [42.7, 30285.0], [42.8, 30285.0], [42.9, 30285.0], [43.0, 31563.0], [43.1, 31563.0], [43.2, 31563.0], [43.3, 31563.0], [43.4, 31563.0], [43.5, 31563.0], [43.6, 31563.0], [43.7, 31563.0], [43.8, 31563.0], [43.9, 31563.0], [44.0, 32495.0], [44.1, 32495.0], [44.2, 32495.0], [44.3, 32495.0], [44.4, 32495.0], [44.5, 32495.0], [44.6, 32495.0], [44.7, 32495.0], [44.8, 32495.0], [44.9, 32495.0], [45.0, 32501.0], [45.1, 32501.0], [45.2, 32501.0], [45.3, 32501.0], [45.4, 32501.0], [45.5, 32501.0], [45.6, 32501.0], [45.7, 32501.0], [45.8, 32501.0], [45.9, 32501.0], [46.0, 32791.0], [46.1, 32791.0], [46.2, 32791.0], [46.3, 32791.0], [46.4, 32791.0], [46.5, 32791.0], [46.6, 32791.0], [46.7, 32791.0], [46.8, 32791.0], [46.9, 32791.0], [47.0, 32877.0], [47.1, 32877.0], [47.2, 32877.0], [47.3, 32877.0], [47.4, 32877.0], [47.5, 32877.0], [47.6, 32877.0], [47.7, 32877.0], [47.8, 32877.0], [47.9, 32877.0], [48.0, 32935.0], [48.1, 32935.0], [48.2, 32935.0], [48.3, 32935.0], [48.4, 32935.0], [48.5, 32935.0], [48.6, 32935.0], [48.7, 32935.0], [48.8, 32935.0], [48.9, 32935.0], [49.0, 33067.0], [49.1, 33067.0], [49.2, 33067.0], [49.3, 33067.0], [49.4, 33067.0], [49.5, 33067.0], [49.6, 33067.0], [49.7, 33067.0], [49.8, 33067.0], [49.9, 33067.0], [50.0, 33325.0], [50.1, 33325.0], [50.2, 33325.0], [50.3, 33325.0], [50.4, 33325.0], [50.5, 33325.0], [50.6, 33325.0], [50.7, 33325.0], [50.8, 33325.0], [50.9, 33325.0], [51.0, 34940.0], [51.1, 34940.0], [51.2, 34940.0], [51.3, 34940.0], [51.4, 34940.0], [51.5, 34940.0], [51.6, 34940.0], [51.7, 34940.0], [51.8, 34940.0], [51.9, 34940.0], [52.0, 35308.0], [52.1, 35308.0], [52.2, 35308.0], [52.3, 35308.0], [52.4, 35308.0], [52.5, 35308.0], [52.6, 35308.0], [52.7, 35308.0], [52.8, 35308.0], [52.9, 35308.0], [53.0, 37092.0], [53.1, 37092.0], [53.2, 37092.0], [53.3, 37092.0], [53.4, 37092.0], [53.5, 37092.0], [53.6, 37092.0], [53.7, 37092.0], [53.8, 37092.0], [53.9, 37092.0], [54.0, 37465.0], [54.1, 37465.0], [54.2, 37465.0], [54.3, 37465.0], [54.4, 37465.0], [54.5, 37465.0], [54.6, 37465.0], [54.7, 37465.0], [54.8, 37465.0], [54.9, 37465.0], [55.0, 37664.0], [55.1, 37664.0], [55.2, 37664.0], [55.3, 37664.0], [55.4, 37664.0], [55.5, 37664.0], [55.6, 37664.0], [55.7, 37664.0], [55.8, 37664.0], [55.9, 37664.0], [56.0, 38136.0], [56.1, 38136.0], [56.2, 38136.0], [56.3, 38136.0], [56.4, 38136.0], [56.5, 38136.0], [56.6, 38136.0], [56.7, 38136.0], [56.8, 38136.0], [56.9, 38136.0], [57.0, 39003.0], [57.1, 39003.0], [57.2, 39003.0], [57.3, 39003.0], [57.4, 39003.0], [57.5, 39003.0], [57.6, 39003.0], [57.7, 39003.0], [57.8, 39003.0], [57.9, 39003.0], [58.0, 39023.0], [58.1, 39023.0], [58.2, 39023.0], [58.3, 39023.0], [58.4, 39023.0], [58.5, 39023.0], [58.6, 39023.0], [58.7, 39023.0], [58.8, 39023.0], [58.9, 39023.0], [59.0, 39329.0], [59.1, 39329.0], [59.2, 39329.0], [59.3, 39329.0], [59.4, 39329.0], [59.5, 39329.0], [59.6, 39329.0], [59.7, 39329.0], [59.8, 39329.0], [59.9, 39329.0], [60.0, 39515.0], [60.1, 39515.0], [60.2, 39515.0], [60.3, 39515.0], [60.4, 39515.0], [60.5, 39515.0], [60.6, 39515.0], [60.7, 39515.0], [60.8, 39515.0], [60.9, 39515.0], [61.0, 41119.0], [61.1, 41119.0], [61.2, 41119.0], [61.3, 41119.0], [61.4, 41119.0], [61.5, 41119.0], [61.6, 41119.0], [61.7, 41119.0], [61.8, 41119.0], [61.9, 41119.0], [62.0, 41122.0], [62.1, 41122.0], [62.2, 41122.0], [62.3, 41122.0], [62.4, 41122.0], [62.5, 41122.0], [62.6, 41122.0], [62.7, 41122.0], [62.8, 41122.0], [62.9, 41122.0], [63.0, 44210.0], [63.1, 44210.0], [63.2, 44210.0], [63.3, 44210.0], [63.4, 44210.0], [63.5, 44210.0], [63.6, 44210.0], [63.7, 44210.0], [63.8, 44210.0], [63.9, 44210.0], [64.0, 44291.0], [64.1, 44291.0], [64.2, 44291.0], [64.3, 44291.0], [64.4, 44291.0], [64.5, 44291.0], [64.6, 44291.0], [64.7, 44291.0], [64.8, 44291.0], [64.9, 44291.0], [65.0, 44458.0], [65.1, 44458.0], [65.2, 44458.0], [65.3, 44458.0], [65.4, 44458.0], [65.5, 44458.0], [65.6, 44458.0], [65.7, 44458.0], [65.8, 44458.0], [65.9, 44458.0], [66.0, 44956.0], [66.1, 44956.0], [66.2, 44956.0], [66.3, 44956.0], [66.4, 44956.0], [66.5, 44956.0], [66.6, 44956.0], [66.7, 44956.0], [66.8, 44956.0], [66.9, 44956.0], [67.0, 45436.0], [67.1, 45436.0], [67.2, 45436.0], [67.3, 45436.0], [67.4, 45436.0], [67.5, 45436.0], [67.6, 45436.0], [67.7, 45436.0], [67.8, 45436.0], [67.9, 45436.0], [68.0, 45528.0], [68.1, 45528.0], [68.2, 45528.0], [68.3, 45528.0], [68.4, 45528.0], [68.5, 45528.0], [68.6, 45528.0], [68.7, 45528.0], [68.8, 45528.0], [68.9, 45528.0], [69.0, 45874.0], [69.1, 45874.0], [69.2, 45874.0], [69.3, 45874.0], [69.4, 45874.0], [69.5, 45874.0], [69.6, 45874.0], [69.7, 45874.0], [69.8, 45874.0], [69.9, 45874.0], [70.0, 46235.0], [70.1, 46235.0], [70.2, 46235.0], [70.3, 46235.0], [70.4, 46235.0], [70.5, 46235.0], [70.6, 46235.0], [70.7, 46235.0], [70.8, 46235.0], [70.9, 46235.0], [71.0, 47004.0], [71.1, 47004.0], [71.2, 47004.0], [71.3, 47004.0], [71.4, 47004.0], [71.5, 47004.0], [71.6, 47004.0], [71.7, 47004.0], [71.8, 47004.0], [71.9, 47004.0], [72.0, 47185.0], [72.1, 47185.0], [72.2, 47185.0], [72.3, 47185.0], [72.4, 47185.0], [72.5, 47185.0], [72.6, 47185.0], [72.7, 47185.0], [72.8, 47185.0], [72.9, 47185.0], [73.0, 48836.0], [73.1, 48836.0], [73.2, 48836.0], [73.3, 48836.0], [73.4, 48836.0], [73.5, 48836.0], [73.6, 48836.0], [73.7, 48836.0], [73.8, 48836.0], [73.9, 48836.0], [74.0, 49261.0], [74.1, 49261.0], [74.2, 49261.0], [74.3, 49261.0], [74.4, 49261.0], [74.5, 49261.0], [74.6, 49261.0], [74.7, 49261.0], [74.8, 49261.0], [74.9, 49261.0], [75.0, 49455.0], [75.1, 49455.0], [75.2, 49455.0], [75.3, 49455.0], [75.4, 49455.0], [75.5, 49455.0], [75.6, 49455.0], [75.7, 49455.0], [75.8, 49455.0], [75.9, 49455.0], [76.0, 49801.0], [76.1, 49801.0], [76.2, 49801.0], [76.3, 49801.0], [76.4, 49801.0], [76.5, 49801.0], [76.6, 49801.0], [76.7, 49801.0], [76.8, 49801.0], [76.9, 49801.0], [77.0, 50868.0], [77.1, 50868.0], [77.2, 50868.0], [77.3, 50868.0], [77.4, 50868.0], [77.5, 50868.0], [77.6, 50868.0], [77.7, 50868.0], [77.8, 50868.0], [77.9, 50868.0], [78.0, 50872.0], [78.1, 50872.0], [78.2, 50872.0], [78.3, 50872.0], [78.4, 50872.0], [78.5, 50872.0], [78.6, 50872.0], [78.7, 50872.0], [78.8, 50872.0], [78.9, 50872.0], [79.0, 50912.0], [79.1, 50912.0], [79.2, 50912.0], [79.3, 50912.0], [79.4, 50912.0], [79.5, 50912.0], [79.6, 50912.0], [79.7, 50912.0], [79.8, 50912.0], [79.9, 50912.0], [80.0, 51787.0], [80.1, 51787.0], [80.2, 51787.0], [80.3, 51787.0], [80.4, 51787.0], [80.5, 51787.0], [80.6, 51787.0], [80.7, 51787.0], [80.8, 51787.0], [80.9, 51787.0], [81.0, 52212.0], [81.1, 52212.0], [81.2, 52212.0], [81.3, 52212.0], [81.4, 52212.0], [81.5, 52212.0], [81.6, 52212.0], [81.7, 52212.0], [81.8, 52212.0], [81.9, 52212.0], [82.0, 52958.0], [82.1, 52958.0], [82.2, 52958.0], [82.3, 52958.0], [82.4, 52958.0], [82.5, 52958.0], [82.6, 52958.0], [82.7, 52958.0], [82.8, 52958.0], [82.9, 52958.0], [83.0, 54974.0], [83.1, 54974.0], [83.2, 54974.0], [83.3, 54974.0], [83.4, 54974.0], [83.5, 54974.0], [83.6, 54974.0], [83.7, 54974.0], [83.8, 54974.0], [83.9, 54974.0], [84.0, 55449.0], [84.1, 55449.0], [84.2, 55449.0], [84.3, 55449.0], [84.4, 55449.0], [84.5, 55449.0], [84.6, 55449.0], [84.7, 55449.0], [84.8, 55449.0], [84.9, 55449.0], [85.0, 55568.0], [85.1, 55568.0], [85.2, 55568.0], [85.3, 55568.0], [85.4, 55568.0], [85.5, 55568.0], [85.6, 55568.0], [85.7, 55568.0], [85.8, 55568.0], [85.9, 55568.0], [86.0, 56260.0], [86.1, 56260.0], [86.2, 56260.0], [86.3, 56260.0], [86.4, 56260.0], [86.5, 56260.0], [86.6, 56260.0], [86.7, 56260.0], [86.8, 56260.0], [86.9, 56260.0], [87.0, 57094.0], [87.1, 57094.0], [87.2, 57094.0], [87.3, 57094.0], [87.4, 57094.0], [87.5, 57094.0], [87.6, 57094.0], [87.7, 57094.0], [87.8, 57094.0], [87.9, 57094.0], [88.0, 57476.0], [88.1, 57476.0], [88.2, 57476.0], [88.3, 57476.0], [88.4, 57476.0], [88.5, 57476.0], [88.6, 57476.0], [88.7, 57476.0], [88.8, 57476.0], [88.9, 57476.0], [89.0, 57762.0], [89.1, 57762.0], [89.2, 57762.0], [89.3, 57762.0], [89.4, 57762.0], [89.5, 57762.0], [89.6, 57762.0], [89.7, 57762.0], [89.8, 57762.0], [89.9, 57762.0], [90.0, 57852.0], [90.1, 57852.0], [90.2, 57852.0], [90.3, 57852.0], [90.4, 57852.0], [90.5, 57852.0], [90.6, 57852.0], [90.7, 57852.0], [90.8, 57852.0], [90.9, 57852.0], [91.0, 58871.0], [91.1, 58871.0], [91.2, 58871.0], [91.3, 58871.0], [91.4, 58871.0], [91.5, 58871.0], [91.6, 58871.0], [91.7, 58871.0], [91.8, 58871.0], [91.9, 58871.0], [92.0, 59320.0], [92.1, 59320.0], [92.2, 59320.0], [92.3, 59320.0], [92.4, 59320.0], [92.5, 59320.0], [92.6, 59320.0], [92.7, 59320.0], [92.8, 59320.0], [92.9, 59320.0], [93.0, 59579.0], [93.1, 59579.0], [93.2, 59579.0], [93.3, 59579.0], [93.4, 59579.0], [93.5, 59579.0], [93.6, 59579.0], [93.7, 59579.0], [93.8, 59579.0], [93.9, 59579.0], [94.0, 60302.0], [94.1, 60302.0], [94.2, 60302.0], [94.3, 60302.0], [94.4, 60302.0], [94.5, 60302.0], [94.6, 60302.0], [94.7, 60302.0], [94.8, 60302.0], [94.9, 60302.0], [95.0, 60336.0], [95.1, 60336.0], [95.2, 60336.0], [95.3, 60336.0], [95.4, 60336.0], [95.5, 60336.0], [95.6, 60336.0], [95.7, 60336.0], [95.8, 60336.0], [95.9, 60336.0], [96.0, 60476.0], [96.1, 60476.0], [96.2, 60476.0], [96.3, 60476.0], [96.4, 60476.0], [96.5, 60476.0], [96.6, 60476.0], [96.7, 60476.0], [96.8, 60476.0], [96.9, 60476.0], [97.0, 60611.0], [97.1, 60611.0], [97.2, 60611.0], [97.3, 60611.0], [97.4, 60611.0], [97.5, 60611.0], [97.6, 60611.0], [97.7, 60611.0], [97.8, 60611.0], [97.9, 60611.0], [98.0, 60774.0], [98.1, 60774.0], [98.2, 60774.0], [98.3, 60774.0], [98.4, 60774.0], [98.5, 60774.0], [98.6, 60774.0], [98.7, 60774.0], [98.8, 60774.0], [98.9, 60774.0], [99.0, 60863.0], [99.1, 60863.0], [99.2, 60863.0], [99.3, 60863.0], [99.4, 60863.0], [99.5, 60863.0], [99.6, 60863.0], [99.7, 60863.0], [99.8, 60863.0], [99.9, 60863.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 5300.0, "maxY": 3.0, "series": [{"data": [[5300.0, 1.0], [5800.0, 1.0], [6400.0, 1.0], [6500.0, 1.0], [6600.0, 1.0], [6700.0, 2.0], [6800.0, 1.0], [7100.0, 1.0], [7400.0, 1.0], [9600.0, 1.0], [12400.0, 1.0], [12700.0, 1.0], [13100.0, 3.0], [13400.0, 1.0], [13800.0, 2.0], [13900.0, 1.0], [15300.0, 1.0], [17100.0, 1.0], [17900.0, 1.0], [18000.0, 1.0], [18200.0, 1.0], [18400.0, 2.0], [19100.0, 3.0], [19600.0, 1.0], [24300.0, 1.0], [25000.0, 1.0], [25400.0, 1.0], [25500.0, 2.0], [25900.0, 1.0], [26000.0, 1.0], [26100.0, 1.0], [26400.0, 1.0], [26900.0, 1.0], [28700.0, 1.0], [30200.0, 1.0], [31500.0, 1.0], [32400.0, 1.0], [32500.0, 1.0], [32700.0, 1.0], [32800.0, 1.0], [32900.0, 1.0], [33000.0, 1.0], [33300.0, 1.0], [34900.0, 1.0], [35300.0, 1.0], [37000.0, 1.0], [37400.0, 1.0], [37600.0, 1.0], [38100.0, 1.0], [39000.0, 2.0], [39300.0, 1.0], [39500.0, 1.0], [41100.0, 2.0], [44200.0, 2.0], [44400.0, 1.0], [44900.0, 1.0], [45400.0, 1.0], [45500.0, 1.0], [45800.0, 1.0], [46200.0, 1.0], [47000.0, 1.0], [47100.0, 1.0], [48800.0, 1.0], [49200.0, 1.0], [49400.0, 1.0], [49800.0, 1.0], [50800.0, 2.0], [50900.0, 1.0], [51700.0, 1.0], [52200.0, 1.0], [52900.0, 1.0], [54900.0, 1.0], [55400.0, 1.0], [55500.0, 1.0], [56200.0, 1.0], [57000.0, 1.0], [57400.0, 1.0], [57700.0, 1.0], [57800.0, 1.0], [58800.0, 1.0], [59300.0, 1.0], [59500.0, 1.0], [60300.0, 2.0], [60400.0, 1.0], [60600.0, 1.0], [60700.0, 1.0], [60800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 60800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 25.0, "minX": 1.66823562E12, "maxY": 75.01960784313722, "series": [{"data": [[1.66823568E12, 25.0], [1.66823562E12, 75.01960784313722]], "isOverall": false, "label": "client-to-application", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823568E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 5309.0, "minX": 1.0, "maxY": 60863.0, "series": [{"data": [[2.0, 60774.0], [3.0, 60611.0], [4.0, 60476.0], [5.0, 60336.0], [6.0, 60302.0], [7.0, 59579.0], [8.0, 59320.0], [9.0, 58871.0], [10.0, 57852.0], [11.0, 57762.0], [12.0, 57476.0], [13.0, 57094.0], [14.0, 56260.0], [15.0, 55568.0], [16.0, 55449.0], [17.0, 54974.0], [18.0, 52958.0], [19.0, 52212.0], [20.0, 51787.0], [21.0, 50912.0], [22.0, 50872.0], [23.0, 50868.0], [24.0, 49801.0], [25.0, 49455.0], [26.0, 49261.0], [27.0, 48836.0], [28.0, 47185.0], [29.0, 47004.0], [30.0, 46235.0], [31.0, 45874.0], [33.0, 45436.0], [32.0, 45528.0], [35.0, 44458.0], [34.0, 44956.0], [37.0, 44210.0], [36.0, 44291.0], [39.0, 41119.0], [38.0, 41122.0], [41.0, 39329.0], [40.0, 39515.0], [43.0, 39003.0], [42.0, 39023.0], [45.0, 37664.0], [44.0, 38136.0], [47.0, 37092.0], [46.0, 37465.0], [49.0, 34940.0], [48.0, 35308.0], [51.0, 33067.0], [50.0, 33325.0], [53.0, 32877.0], [52.0, 32935.0], [55.0, 32501.0], [54.0, 32791.0], [57.0, 31563.0], [56.0, 32495.0], [59.0, 28702.0], [58.0, 30285.0], [61.0, 26452.0], [60.0, 26989.0], [63.0, 26088.0], [62.0, 26171.0], [67.0, 25431.0], [66.0, 25519.0], [65.0, 25548.0], [64.0, 25923.0], [71.0, 19162.0], [70.0, 19617.0], [69.0, 24305.0], [68.0, 25035.0], [75.0, 18419.0], [74.0, 18446.0], [73.0, 19109.0], [79.0, 17170.0], [78.0, 17933.0], [77.0, 18082.0], [76.0, 18220.0], [83.0, 13877.0], [82.0, 13897.0], [81.0, 13931.0], [80.0, 15399.0], [87.0, 13150.0], [86.0, 13169.0], [85.0, 13197.0], [84.0, 13427.0], [91.0, 7467.0], [90.0, 9610.0], [89.0, 12404.0], [88.0, 12799.0], [95.0, 6736.0], [94.0, 6762.0], [93.0, 6827.0], [92.0, 7117.0], [99.0, 5893.0], [98.0, 6491.0], [97.0, 6527.0], [96.0, 6678.0], [100.0, 5309.0], [1.0, 60863.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.509999999999984, 33893.58]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 104.53333333333333, "minX": 1.66823562E12, "maxY": 9630050.35, "series": [{"data": [[1.66823568E12, 9252401.316666666], [1.66823562E12, 9630050.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66823568E12, 104.53333333333333], [1.66823562E12, 108.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823568E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 19096.784313725493, "minX": 1.66823562E12, "maxY": 49294.32653061225, "series": [{"data": [[1.66823568E12, 49294.32653061225], [1.66823562E12, 19096.784313725493]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823568E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 16928.86274509804, "minX": 1.66823562E12, "maxY": 46824.99999999999, "series": [{"data": [[1.66823568E12, 46824.99999999999], [1.66823562E12, 16928.86274509804]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823568E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 30.80392156862745, "minX": 1.66823562E12, "maxY": 38.44897959183672, "series": [{"data": [[1.66823568E12, 38.44897959183672], [1.66823562E12, 30.80392156862745]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823568E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5309.0, "minX": 1.66823562E12, "maxY": 60863.0, "series": [{"data": [[1.66823568E12, 60863.0], [1.66823562E12, 33325.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66823568E12, 60336.0], [1.66823562E12, 32733.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66823568E12, 60863.0], [1.66823562E12, 33325.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66823568E12, 60692.5], [1.66823562E12, 32987.8]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66823568E12, 34940.0], [1.66823562E12, 5309.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66823568E12, 49455.0], [1.66823562E12, 18419.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823568E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 6678.0, "minX": 1.0, "maxY": 60543.5, "series": [{"data": [[1.0, 31563.0], [2.0, 35124.0], [4.0, 32646.0], [5.0, 15905.0], [3.0, 46859.5], [6.0, 60543.5], [7.0, 6678.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 4449.0, "minX": 1.0, "maxY": 59472.0, "series": [{"data": [[1.0, 29046.0], [2.0, 32706.5], [4.0, 30324.5], [5.0, 13784.0], [3.0, 44318.5], [6.0, 59472.0], [7.0, 4449.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66823562E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66823562E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823562E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.66823562E12, "maxY": 0.85, "series": [{"data": [[1.66823568E12, 0.8166666666666667], [1.66823562E12, 0.85]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823568E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.66823562E12, "maxY": 0.85, "series": [{"data": [[1.66823568E12, 0.8166666666666667], [1.66823562E12, 0.85]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823568E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.66823562E12, "maxY": 0.85, "series": [{"data": [[1.66823568E12, 0.8166666666666667], [1.66823562E12, 0.85]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823568E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

