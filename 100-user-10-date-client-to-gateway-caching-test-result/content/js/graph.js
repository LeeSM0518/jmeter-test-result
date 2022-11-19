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
        data: {"result": {"minY": 11174.0, "minX": 0.0, "maxY": 16521.0, "series": [{"data": [[0.0, 11174.0], [0.1, 11174.0], [0.2, 11174.0], [0.3, 11174.0], [0.4, 11174.0], [0.5, 11174.0], [0.6, 11174.0], [0.7, 11174.0], [0.8, 11174.0], [0.9, 11174.0], [1.0, 11757.0], [1.1, 11757.0], [1.2, 11757.0], [1.3, 11757.0], [1.4, 11757.0], [1.5, 11757.0], [1.6, 11757.0], [1.7, 11757.0], [1.8, 11757.0], [1.9, 11757.0], [2.0, 12073.0], [2.1, 12073.0], [2.2, 12073.0], [2.3, 12073.0], [2.4, 12073.0], [2.5, 12073.0], [2.6, 12073.0], [2.7, 12073.0], [2.8, 12073.0], [2.9, 12073.0], [3.0, 12224.0], [3.1, 12224.0], [3.2, 12224.0], [3.3, 12224.0], [3.4, 12224.0], [3.5, 12224.0], [3.6, 12224.0], [3.7, 12224.0], [3.8, 12224.0], [3.9, 12224.0], [4.0, 12248.0], [4.1, 12248.0], [4.2, 12248.0], [4.3, 12248.0], [4.4, 12248.0], [4.5, 12248.0], [4.6, 12248.0], [4.7, 12248.0], [4.8, 12248.0], [4.9, 12248.0], [5.0, 12283.0], [5.1, 12283.0], [5.2, 12283.0], [5.3, 12283.0], [5.4, 12283.0], [5.5, 12283.0], [5.6, 12283.0], [5.7, 12283.0], [5.8, 12283.0], [5.9, 12283.0], [6.0, 12489.0], [6.1, 12489.0], [6.2, 12489.0], [6.3, 12489.0], [6.4, 12489.0], [6.5, 12489.0], [6.6, 12489.0], [6.7, 12489.0], [6.8, 12489.0], [6.9, 12489.0], [7.0, 12546.0], [7.1, 12546.0], [7.2, 12546.0], [7.3, 12546.0], [7.4, 12546.0], [7.5, 12546.0], [7.6, 12546.0], [7.7, 12546.0], [7.8, 12546.0], [7.9, 12546.0], [8.0, 12554.0], [8.1, 12554.0], [8.2, 12554.0], [8.3, 12554.0], [8.4, 12554.0], [8.5, 12554.0], [8.6, 12554.0], [8.7, 12554.0], [8.8, 12554.0], [8.9, 12554.0], [9.0, 12589.0], [9.1, 12589.0], [9.2, 12589.0], [9.3, 12589.0], [9.4, 12589.0], [9.5, 12589.0], [9.6, 12589.0], [9.7, 12589.0], [9.8, 12589.0], [9.9, 12589.0], [10.0, 12771.0], [10.1, 12771.0], [10.2, 12771.0], [10.3, 12771.0], [10.4, 12771.0], [10.5, 12771.0], [10.6, 12771.0], [10.7, 12771.0], [10.8, 12771.0], [10.9, 12771.0], [11.0, 12791.0], [11.1, 12791.0], [11.2, 12791.0], [11.3, 12791.0], [11.4, 12791.0], [11.5, 12791.0], [11.6, 12791.0], [11.7, 12791.0], [11.8, 12791.0], [11.9, 12791.0], [12.0, 12870.0], [12.1, 12870.0], [12.2, 12870.0], [12.3, 12870.0], [12.4, 12870.0], [12.5, 12870.0], [12.6, 12870.0], [12.7, 12870.0], [12.8, 12870.0], [12.9, 12870.0], [13.0, 12902.0], [13.1, 12902.0], [13.2, 12902.0], [13.3, 12902.0], [13.4, 12902.0], [13.5, 12902.0], [13.6, 12902.0], [13.7, 12902.0], [13.8, 12902.0], [13.9, 12902.0], [14.0, 12989.0], [14.1, 12989.0], [14.2, 12989.0], [14.3, 12989.0], [14.4, 12989.0], [14.5, 12989.0], [14.6, 12989.0], [14.7, 12989.0], [14.8, 12989.0], [14.9, 12989.0], [15.0, 13001.0], [15.1, 13001.0], [15.2, 13001.0], [15.3, 13001.0], [15.4, 13001.0], [15.5, 13001.0], [15.6, 13001.0], [15.7, 13001.0], [15.8, 13001.0], [15.9, 13001.0], [16.0, 13014.0], [16.1, 13014.0], [16.2, 13014.0], [16.3, 13014.0], [16.4, 13014.0], [16.5, 13014.0], [16.6, 13014.0], [16.7, 13014.0], [16.8, 13014.0], [16.9, 13014.0], [17.0, 13021.0], [17.1, 13021.0], [17.2, 13021.0], [17.3, 13021.0], [17.4, 13021.0], [17.5, 13021.0], [17.6, 13021.0], [17.7, 13021.0], [17.8, 13021.0], [17.9, 13021.0], [18.0, 13044.0], [18.1, 13044.0], [18.2, 13044.0], [18.3, 13044.0], [18.4, 13044.0], [18.5, 13044.0], [18.6, 13044.0], [18.7, 13044.0], [18.8, 13044.0], [18.9, 13044.0], [19.0, 13084.0], [19.1, 13084.0], [19.2, 13084.0], [19.3, 13084.0], [19.4, 13084.0], [19.5, 13084.0], [19.6, 13084.0], [19.7, 13084.0], [19.8, 13084.0], [19.9, 13084.0], [20.0, 13171.0], [20.1, 13171.0], [20.2, 13171.0], [20.3, 13171.0], [20.4, 13171.0], [20.5, 13171.0], [20.6, 13171.0], [20.7, 13171.0], [20.8, 13171.0], [20.9, 13171.0], [21.0, 14513.0], [21.1, 14513.0], [21.2, 14513.0], [21.3, 14513.0], [21.4, 14513.0], [21.5, 14513.0], [21.6, 14513.0], [21.7, 14513.0], [21.8, 14513.0], [21.9, 14513.0], [22.0, 14559.0], [22.1, 14559.0], [22.2, 14559.0], [22.3, 14559.0], [22.4, 14559.0], [22.5, 14559.0], [22.6, 14559.0], [22.7, 14559.0], [22.8, 14559.0], [22.9, 14559.0], [23.0, 14569.0], [23.1, 14569.0], [23.2, 14569.0], [23.3, 14569.0], [23.4, 14569.0], [23.5, 14569.0], [23.6, 14569.0], [23.7, 14569.0], [23.8, 14569.0], [23.9, 14569.0], [24.0, 14689.0], [24.1, 14689.0], [24.2, 14689.0], [24.3, 14689.0], [24.4, 14689.0], [24.5, 14689.0], [24.6, 14689.0], [24.7, 14689.0], [24.8, 14689.0], [24.9, 14689.0], [25.0, 14734.0], [25.1, 14734.0], [25.2, 14734.0], [25.3, 14734.0], [25.4, 14734.0], [25.5, 14734.0], [25.6, 14734.0], [25.7, 14734.0], [25.8, 14734.0], [25.9, 14734.0], [26.0, 14769.0], [26.1, 14769.0], [26.2, 14769.0], [26.3, 14769.0], [26.4, 14769.0], [26.5, 14769.0], [26.6, 14769.0], [26.7, 14769.0], [26.8, 14769.0], [26.9, 14769.0], [27.0, 14781.0], [27.1, 14781.0], [27.2, 14781.0], [27.3, 14781.0], [27.4, 14781.0], [27.5, 14781.0], [27.6, 14781.0], [27.7, 14781.0], [27.8, 14781.0], [27.9, 14781.0], [28.0, 14813.0], [28.1, 14813.0], [28.2, 14813.0], [28.3, 14813.0], [28.4, 14813.0], [28.5, 14813.0], [28.6, 14813.0], [28.7, 14813.0], [28.8, 14813.0], [28.9, 14813.0], [29.0, 14813.0], [29.1, 14813.0], [29.2, 14813.0], [29.3, 14813.0], [29.4, 14813.0], [29.5, 14813.0], [29.6, 14813.0], [29.7, 14813.0], [29.8, 14813.0], [29.9, 14813.0], [30.0, 14823.0], [30.1, 14823.0], [30.2, 14823.0], [30.3, 14823.0], [30.4, 14823.0], [30.5, 14823.0], [30.6, 14823.0], [30.7, 14823.0], [30.8, 14823.0], [30.9, 14823.0], [31.0, 14859.0], [31.1, 14859.0], [31.2, 14859.0], [31.3, 14859.0], [31.4, 14859.0], [31.5, 14859.0], [31.6, 14859.0], [31.7, 14859.0], [31.8, 14859.0], [31.9, 14859.0], [32.0, 14882.0], [32.1, 14882.0], [32.2, 14882.0], [32.3, 14882.0], [32.4, 14882.0], [32.5, 14882.0], [32.6, 14882.0], [32.7, 14882.0], [32.8, 14882.0], [32.9, 14882.0], [33.0, 14891.0], [33.1, 14891.0], [33.2, 14891.0], [33.3, 14891.0], [33.4, 14891.0], [33.5, 14891.0], [33.6, 14891.0], [33.7, 14891.0], [33.8, 14891.0], [33.9, 14891.0], [34.0, 14902.0], [34.1, 14902.0], [34.2, 14902.0], [34.3, 14902.0], [34.4, 14902.0], [34.5, 14902.0], [34.6, 14902.0], [34.7, 14902.0], [34.8, 14902.0], [34.9, 14902.0], [35.0, 14902.0], [35.1, 14902.0], [35.2, 14902.0], [35.3, 14902.0], [35.4, 14902.0], [35.5, 14902.0], [35.6, 14902.0], [35.7, 14902.0], [35.8, 14902.0], [35.9, 14902.0], [36.0, 14914.0], [36.1, 14914.0], [36.2, 14914.0], [36.3, 14914.0], [36.4, 14914.0], [36.5, 14914.0], [36.6, 14914.0], [36.7, 14914.0], [36.8, 14914.0], [36.9, 14914.0], [37.0, 15078.0], [37.1, 15078.0], [37.2, 15078.0], [37.3, 15078.0], [37.4, 15078.0], [37.5, 15078.0], [37.6, 15078.0], [37.7, 15078.0], [37.8, 15078.0], [37.9, 15078.0], [38.0, 15127.0], [38.1, 15127.0], [38.2, 15127.0], [38.3, 15127.0], [38.4, 15127.0], [38.5, 15127.0], [38.6, 15127.0], [38.7, 15127.0], [38.8, 15127.0], [38.9, 15127.0], [39.0, 15130.0], [39.1, 15130.0], [39.2, 15130.0], [39.3, 15130.0], [39.4, 15130.0], [39.5, 15130.0], [39.6, 15130.0], [39.7, 15130.0], [39.8, 15130.0], [39.9, 15130.0], [40.0, 15135.0], [40.1, 15135.0], [40.2, 15135.0], [40.3, 15135.0], [40.4, 15135.0], [40.5, 15135.0], [40.6, 15135.0], [40.7, 15135.0], [40.8, 15135.0], [40.9, 15135.0], [41.0, 15147.0], [41.1, 15147.0], [41.2, 15147.0], [41.3, 15147.0], [41.4, 15147.0], [41.5, 15147.0], [41.6, 15147.0], [41.7, 15147.0], [41.8, 15147.0], [41.9, 15147.0], [42.0, 15160.0], [42.1, 15160.0], [42.2, 15160.0], [42.3, 15160.0], [42.4, 15160.0], [42.5, 15160.0], [42.6, 15160.0], [42.7, 15160.0], [42.8, 15160.0], [42.9, 15160.0], [43.0, 15166.0], [43.1, 15166.0], [43.2, 15166.0], [43.3, 15166.0], [43.4, 15166.0], [43.5, 15166.0], [43.6, 15166.0], [43.7, 15166.0], [43.8, 15166.0], [43.9, 15166.0], [44.0, 15172.0], [44.1, 15172.0], [44.2, 15172.0], [44.3, 15172.0], [44.4, 15172.0], [44.5, 15172.0], [44.6, 15172.0], [44.7, 15172.0], [44.8, 15172.0], [44.9, 15172.0], [45.0, 15261.0], [45.1, 15261.0], [45.2, 15261.0], [45.3, 15261.0], [45.4, 15261.0], [45.5, 15261.0], [45.6, 15261.0], [45.7, 15261.0], [45.8, 15261.0], [45.9, 15261.0], [46.0, 15274.0], [46.1, 15274.0], [46.2, 15274.0], [46.3, 15274.0], [46.4, 15274.0], [46.5, 15274.0], [46.6, 15274.0], [46.7, 15274.0], [46.8, 15274.0], [46.9, 15274.0], [47.0, 15287.0], [47.1, 15287.0], [47.2, 15287.0], [47.3, 15287.0], [47.4, 15287.0], [47.5, 15287.0], [47.6, 15287.0], [47.7, 15287.0], [47.8, 15287.0], [47.9, 15287.0], [48.0, 15294.0], [48.1, 15294.0], [48.2, 15294.0], [48.3, 15294.0], [48.4, 15294.0], [48.5, 15294.0], [48.6, 15294.0], [48.7, 15294.0], [48.8, 15294.0], [48.9, 15294.0], [49.0, 15670.0], [49.1, 15670.0], [49.2, 15670.0], [49.3, 15670.0], [49.4, 15670.0], [49.5, 15670.0], [49.6, 15670.0], [49.7, 15670.0], [49.8, 15670.0], [49.9, 15670.0], [50.0, 15845.0], [50.1, 15845.0], [50.2, 15845.0], [50.3, 15845.0], [50.4, 15845.0], [50.5, 15845.0], [50.6, 15845.0], [50.7, 15845.0], [50.8, 15845.0], [50.9, 15845.0], [51.0, 15937.0], [51.1, 15937.0], [51.2, 15937.0], [51.3, 15937.0], [51.4, 15937.0], [51.5, 15937.0], [51.6, 15937.0], [51.7, 15937.0], [51.8, 15937.0], [51.9, 15937.0], [52.0, 15972.0], [52.1, 15972.0], [52.2, 15972.0], [52.3, 15972.0], [52.4, 15972.0], [52.5, 15972.0], [52.6, 15972.0], [52.7, 15972.0], [52.8, 15972.0], [52.9, 15972.0], [53.0, 15976.0], [53.1, 15976.0], [53.2, 15976.0], [53.3, 15976.0], [53.4, 15976.0], [53.5, 15976.0], [53.6, 15976.0], [53.7, 15976.0], [53.8, 15976.0], [53.9, 15976.0], [54.0, 15996.0], [54.1, 15996.0], [54.2, 15996.0], [54.3, 15996.0], [54.4, 15996.0], [54.5, 15996.0], [54.6, 15996.0], [54.7, 15996.0], [54.8, 15996.0], [54.9, 15996.0], [55.0, 16000.0], [55.1, 16000.0], [55.2, 16000.0], [55.3, 16000.0], [55.4, 16000.0], [55.5, 16000.0], [55.6, 16000.0], [55.7, 16000.0], [55.8, 16000.0], [55.9, 16000.0], [56.0, 16010.0], [56.1, 16010.0], [56.2, 16010.0], [56.3, 16010.0], [56.4, 16010.0], [56.5, 16010.0], [56.6, 16010.0], [56.7, 16010.0], [56.8, 16010.0], [56.9, 16010.0], [57.0, 16023.0], [57.1, 16023.0], [57.2, 16023.0], [57.3, 16023.0], [57.4, 16023.0], [57.5, 16023.0], [57.6, 16023.0], [57.7, 16023.0], [57.8, 16023.0], [57.9, 16023.0], [58.0, 16028.0], [58.1, 16028.0], [58.2, 16028.0], [58.3, 16028.0], [58.4, 16028.0], [58.5, 16028.0], [58.6, 16028.0], [58.7, 16028.0], [58.8, 16028.0], [58.9, 16028.0], [59.0, 16035.0], [59.1, 16035.0], [59.2, 16035.0], [59.3, 16035.0], [59.4, 16035.0], [59.5, 16035.0], [59.6, 16035.0], [59.7, 16035.0], [59.8, 16035.0], [59.9, 16035.0], [60.0, 16040.0], [60.1, 16040.0], [60.2, 16040.0], [60.3, 16040.0], [60.4, 16040.0], [60.5, 16040.0], [60.6, 16040.0], [60.7, 16040.0], [60.8, 16040.0], [60.9, 16040.0], [61.0, 16043.0], [61.1, 16043.0], [61.2, 16043.0], [61.3, 16043.0], [61.4, 16043.0], [61.5, 16043.0], [61.6, 16043.0], [61.7, 16043.0], [61.8, 16043.0], [61.9, 16043.0], [62.0, 16046.0], [62.1, 16046.0], [62.2, 16046.0], [62.3, 16046.0], [62.4, 16046.0], [62.5, 16046.0], [62.6, 16046.0], [62.7, 16046.0], [62.8, 16046.0], [62.9, 16046.0], [63.0, 16047.0], [63.1, 16047.0], [63.2, 16047.0], [63.3, 16047.0], [63.4, 16047.0], [63.5, 16047.0], [63.6, 16047.0], [63.7, 16047.0], [63.8, 16047.0], [63.9, 16047.0], [64.0, 16048.0], [64.1, 16048.0], [64.2, 16048.0], [64.3, 16048.0], [64.4, 16048.0], [64.5, 16048.0], [64.6, 16048.0], [64.7, 16048.0], [64.8, 16048.0], [64.9, 16048.0], [65.0, 16056.0], [65.1, 16056.0], [65.2, 16056.0], [65.3, 16056.0], [65.4, 16056.0], [65.5, 16056.0], [65.6, 16056.0], [65.7, 16056.0], [65.8, 16056.0], [65.9, 16056.0], [66.0, 16057.0], [66.1, 16057.0], [66.2, 16057.0], [66.3, 16057.0], [66.4, 16057.0], [66.5, 16057.0], [66.6, 16057.0], [66.7, 16057.0], [66.8, 16057.0], [66.9, 16057.0], [67.0, 16060.0], [67.1, 16060.0], [67.2, 16060.0], [67.3, 16060.0], [67.4, 16060.0], [67.5, 16060.0], [67.6, 16060.0], [67.7, 16060.0], [67.8, 16060.0], [67.9, 16060.0], [68.0, 16068.0], [68.1, 16068.0], [68.2, 16068.0], [68.3, 16068.0], [68.4, 16068.0], [68.5, 16068.0], [68.6, 16068.0], [68.7, 16068.0], [68.8, 16068.0], [68.9, 16068.0], [69.0, 16068.0], [69.1, 16068.0], [69.2, 16068.0], [69.3, 16068.0], [69.4, 16068.0], [69.5, 16068.0], [69.6, 16068.0], [69.7, 16068.0], [69.8, 16068.0], [69.9, 16068.0], [70.0, 16078.0], [70.1, 16078.0], [70.2, 16078.0], [70.3, 16078.0], [70.4, 16078.0], [70.5, 16078.0], [70.6, 16078.0], [70.7, 16078.0], [70.8, 16078.0], [70.9, 16078.0], [71.0, 16080.0], [71.1, 16080.0], [71.2, 16080.0], [71.3, 16080.0], [71.4, 16080.0], [71.5, 16080.0], [71.6, 16080.0], [71.7, 16080.0], [71.8, 16080.0], [71.9, 16080.0], [72.0, 16105.0], [72.1, 16105.0], [72.2, 16105.0], [72.3, 16105.0], [72.4, 16105.0], [72.5, 16105.0], [72.6, 16105.0], [72.7, 16105.0], [72.8, 16105.0], [72.9, 16105.0], [73.0, 16112.0], [73.1, 16112.0], [73.2, 16112.0], [73.3, 16112.0], [73.4, 16112.0], [73.5, 16112.0], [73.6, 16112.0], [73.7, 16112.0], [73.8, 16112.0], [73.9, 16112.0], [74.0, 16123.0], [74.1, 16123.0], [74.2, 16123.0], [74.3, 16123.0], [74.4, 16123.0], [74.5, 16123.0], [74.6, 16123.0], [74.7, 16123.0], [74.8, 16123.0], [74.9, 16123.0], [75.0, 16129.0], [75.1, 16129.0], [75.2, 16129.0], [75.3, 16129.0], [75.4, 16129.0], [75.5, 16129.0], [75.6, 16129.0], [75.7, 16129.0], [75.8, 16129.0], [75.9, 16129.0], [76.0, 16147.0], [76.1, 16147.0], [76.2, 16147.0], [76.3, 16147.0], [76.4, 16147.0], [76.5, 16147.0], [76.6, 16147.0], [76.7, 16147.0], [76.8, 16147.0], [76.9, 16147.0], [77.0, 16167.0], [77.1, 16167.0], [77.2, 16167.0], [77.3, 16167.0], [77.4, 16167.0], [77.5, 16167.0], [77.6, 16167.0], [77.7, 16167.0], [77.8, 16167.0], [77.9, 16167.0], [78.0, 16175.0], [78.1, 16175.0], [78.2, 16175.0], [78.3, 16175.0], [78.4, 16175.0], [78.5, 16175.0], [78.6, 16175.0], [78.7, 16175.0], [78.8, 16175.0], [78.9, 16175.0], [79.0, 16179.0], [79.1, 16179.0], [79.2, 16179.0], [79.3, 16179.0], [79.4, 16179.0], [79.5, 16179.0], [79.6, 16179.0], [79.7, 16179.0], [79.8, 16179.0], [79.9, 16179.0], [80.0, 16179.0], [80.1, 16179.0], [80.2, 16179.0], [80.3, 16179.0], [80.4, 16179.0], [80.5, 16179.0], [80.6, 16179.0], [80.7, 16179.0], [80.8, 16179.0], [80.9, 16179.0], [81.0, 16184.0], [81.1, 16184.0], [81.2, 16184.0], [81.3, 16184.0], [81.4, 16184.0], [81.5, 16184.0], [81.6, 16184.0], [81.7, 16184.0], [81.8, 16184.0], [81.9, 16184.0], [82.0, 16185.0], [82.1, 16185.0], [82.2, 16185.0], [82.3, 16185.0], [82.4, 16185.0], [82.5, 16185.0], [82.6, 16185.0], [82.7, 16185.0], [82.8, 16185.0], [82.9, 16185.0], [83.0, 16203.0], [83.1, 16203.0], [83.2, 16203.0], [83.3, 16203.0], [83.4, 16203.0], [83.5, 16203.0], [83.6, 16203.0], [83.7, 16203.0], [83.8, 16203.0], [83.9, 16203.0], [84.0, 16220.0], [84.1, 16220.0], [84.2, 16220.0], [84.3, 16220.0], [84.4, 16220.0], [84.5, 16220.0], [84.6, 16220.0], [84.7, 16220.0], [84.8, 16220.0], [84.9, 16220.0], [85.0, 16221.0], [85.1, 16221.0], [85.2, 16221.0], [85.3, 16221.0], [85.4, 16221.0], [85.5, 16221.0], [85.6, 16221.0], [85.7, 16221.0], [85.8, 16221.0], [85.9, 16221.0], [86.0, 16223.0], [86.1, 16223.0], [86.2, 16223.0], [86.3, 16223.0], [86.4, 16223.0], [86.5, 16223.0], [86.6, 16223.0], [86.7, 16223.0], [86.8, 16223.0], [86.9, 16223.0], [87.0, 16237.0], [87.1, 16237.0], [87.2, 16237.0], [87.3, 16237.0], [87.4, 16237.0], [87.5, 16237.0], [87.6, 16237.0], [87.7, 16237.0], [87.8, 16237.0], [87.9, 16237.0], [88.0, 16239.0], [88.1, 16239.0], [88.2, 16239.0], [88.3, 16239.0], [88.4, 16239.0], [88.5, 16239.0], [88.6, 16239.0], [88.7, 16239.0], [88.8, 16239.0], [88.9, 16239.0], [89.0, 16240.0], [89.1, 16240.0], [89.2, 16240.0], [89.3, 16240.0], [89.4, 16240.0], [89.5, 16240.0], [89.6, 16240.0], [89.7, 16240.0], [89.8, 16240.0], [89.9, 16240.0], [90.0, 16249.0], [90.1, 16249.0], [90.2, 16249.0], [90.3, 16249.0], [90.4, 16249.0], [90.5, 16249.0], [90.6, 16249.0], [90.7, 16249.0], [90.8, 16249.0], [90.9, 16249.0], [91.0, 16257.0], [91.1, 16257.0], [91.2, 16257.0], [91.3, 16257.0], [91.4, 16257.0], [91.5, 16257.0], [91.6, 16257.0], [91.7, 16257.0], [91.8, 16257.0], [91.9, 16257.0], [92.0, 16264.0], [92.1, 16264.0], [92.2, 16264.0], [92.3, 16264.0], [92.4, 16264.0], [92.5, 16264.0], [92.6, 16264.0], [92.7, 16264.0], [92.8, 16264.0], [92.9, 16264.0], [93.0, 16270.0], [93.1, 16270.0], [93.2, 16270.0], [93.3, 16270.0], [93.4, 16270.0], [93.5, 16270.0], [93.6, 16270.0], [93.7, 16270.0], [93.8, 16270.0], [93.9, 16270.0], [94.0, 16276.0], [94.1, 16276.0], [94.2, 16276.0], [94.3, 16276.0], [94.4, 16276.0], [94.5, 16276.0], [94.6, 16276.0], [94.7, 16276.0], [94.8, 16276.0], [94.9, 16276.0], [95.0, 16290.0], [95.1, 16290.0], [95.2, 16290.0], [95.3, 16290.0], [95.4, 16290.0], [95.5, 16290.0], [95.6, 16290.0], [95.7, 16290.0], [95.8, 16290.0], [95.9, 16290.0], [96.0, 16443.0], [96.1, 16443.0], [96.2, 16443.0], [96.3, 16443.0], [96.4, 16443.0], [96.5, 16443.0], [96.6, 16443.0], [96.7, 16443.0], [96.8, 16443.0], [96.9, 16443.0], [97.0, 16497.0], [97.1, 16497.0], [97.2, 16497.0], [97.3, 16497.0], [97.4, 16497.0], [97.5, 16497.0], [97.6, 16497.0], [97.7, 16497.0], [97.8, 16497.0], [97.9, 16497.0], [98.0, 16513.0], [98.1, 16513.0], [98.2, 16513.0], [98.3, 16513.0], [98.4, 16513.0], [98.5, 16513.0], [98.6, 16513.0], [98.7, 16513.0], [98.8, 16513.0], [98.9, 16513.0], [99.0, 16521.0], [99.1, 16521.0], [99.2, 16521.0], [99.3, 16521.0], [99.4, 16521.0], [99.5, 16521.0], [99.6, 16521.0], [99.7, 16521.0], [99.8, 16521.0], [99.9, 16521.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 11100.0, "maxY": 17.0, "series": [{"data": [[11100.0, 1.0], [11700.0, 1.0], [12000.0, 1.0], [12200.0, 3.0], [12400.0, 1.0], [12500.0, 3.0], [12700.0, 2.0], [12800.0, 1.0], [12900.0, 2.0], [13000.0, 5.0], [13100.0, 1.0], [14500.0, 3.0], [14600.0, 1.0], [14700.0, 3.0], [14800.0, 6.0], [14900.0, 3.0], [15000.0, 1.0], [15100.0, 7.0], [15200.0, 4.0], [15600.0, 1.0], [15800.0, 1.0], [15900.0, 4.0], [16000.0, 17.0], [16100.0, 11.0], [16200.0, 13.0], [16400.0, 2.0], [16500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.529411764705884, "minX": 1.66836054E12, "maxY": 76.20408163265306, "series": [{"data": [[1.6683606E12, 27.529411764705884], [1.66836054E12, 76.20408163265306]], "isOverall": false, "label": "client-to-gateway-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683606E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 11174.0, "minX": 1.0, "maxY": 16521.0, "series": [{"data": [[2.0, 16497.0], [3.0, 16521.0], [4.0, 16443.0], [5.0, 16290.0], [6.0, 16276.0], [7.0, 16264.0], [9.0, 16270.0], [10.0, 16249.0], [12.0, 16257.0], [13.0, 16238.666666666666], [14.0, 16223.0], [15.0, 16220.0], [16.0, 16221.0], [17.0, 16203.0], [18.0, 16179.0], [20.0, 16181.5], [21.0, 16175.0], [22.0, 16185.0], [23.0, 16167.0], [25.0, 16138.0], [26.0, 16123.0], [27.0, 16112.0], [28.0, 16105.0], [29.0, 16080.0], [32.0, 16078.0], [37.0, 16068.0], [43.0, 16049.333333333334], [42.0, 16045.285714285714], [45.0, 16010.0], [44.0, 16028.666666666666], [47.0, 15976.0], [46.0, 15996.0], [49.0, 15937.0], [48.0, 15972.0], [51.0, 15670.0], [50.0, 15845.0], [53.0, 15294.0], [52.0, 15287.0], [55.0, 15261.0], [54.0, 15274.0], [56.0, 15172.0], [59.0, 15147.0], [58.0, 15163.0], [61.0, 15130.0], [60.0, 15135.0], [63.0, 15078.0], [62.0, 15127.0], [64.0, 14914.0], [70.0, 14823.0], [69.0, 14859.0], [68.0, 14894.25], [75.0, 14734.0], [74.0, 14769.0], [73.0, 14781.0], [72.0, 14813.0], [79.0, 14513.0], [78.0, 14559.0], [77.0, 14569.0], [76.0, 14689.0], [82.0, 13044.0], [81.0, 13084.0], [80.0, 13171.0], [87.0, 12902.0], [86.0, 12995.0], [84.0, 13017.5], [91.0, 12589.0], [90.0, 12771.0], [89.0, 12791.0], [88.0, 12870.0], [95.0, 12283.0], [94.0, 12489.0], [93.0, 12546.0], [92.0, 12554.0], [99.0, 11757.0], [98.0, 12073.0], [97.0, 12224.0], [96.0, 12248.0], [100.0, 11174.0], [1.0, 16513.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[51.380000000000024, 15062.7]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 156.8, "minX": 1.66836054E12, "maxY": 9620590.7, "series": [{"data": [[1.6683606E12, 9620590.7], [1.66836054E12, 9243312.633333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6683606E12, 163.2], [1.66836054E12, 156.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683606E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 13943.65306122449, "minX": 1.66836054E12, "maxY": 16137.862745098038, "series": [{"data": [[1.6683606E12, 16137.862745098038], [1.66836054E12, 13943.65306122449]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683606E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 844.5918367346937, "minX": 1.66836054E12, "maxY": 2475.5882352941176, "series": [{"data": [[1.6683606E12, 2475.5882352941176], [1.66836054E12, 844.5918367346937]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683606E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 48.9795918367347, "minX": 1.66836054E12, "maxY": 50.803921568627445, "series": [{"data": [[1.6683606E12, 50.803921568627445], [1.66836054E12, 48.9795918367347]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683606E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11174.0, "minX": 1.66836054E12, "maxY": 16521.0, "series": [{"data": [[1.6683606E12, 16521.0], [1.66836054E12, 15294.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6683606E12, 16287.2], [1.66836054E12, 15172.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6683606E12, 16521.0], [1.66836054E12, 15294.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6683606E12, 16503.4], [1.66836054E12, 15280.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6683606E12, 15670.0], [1.66836054E12, 11174.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6683606E12, 16123.0], [1.66836054E12, 14689.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683606E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11174.0, "minX": 1.0, "maxY": 16123.0, "series": [{"data": [[1.0, 11174.0], [9.0, 12283.0], [11.0, 13001.0], [3.0, 14559.0], [25.0, 14914.0], [51.0, 16123.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 305.0, "minX": 1.0, "maxY": 2502.0, "series": [{"data": [[1.0, 305.0], [9.0, 692.0], [11.0, 603.0], [3.0, 1214.0], [25.0, 1041.0], [51.0, 2502.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 51.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66836054E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66836054E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836054E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.66836054E12, "maxY": 0.85, "series": [{"data": [[1.6683606E12, 0.85], [1.66836054E12, 0.8166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683606E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.66836054E12, "maxY": 0.85, "series": [{"data": [[1.6683606E12, 0.85], [1.66836054E12, 0.8166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683606E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.66836054E12, "maxY": 0.85, "series": [{"data": [[1.6683606E12, 0.85], [1.66836054E12, 0.8166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683606E12, "title": "Total Transactions Per Second"}},
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

