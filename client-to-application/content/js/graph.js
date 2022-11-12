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
        data: {"result": {"minY": 7752.0, "minX": 0.0, "maxY": 65980.0, "series": [{"data": [[0.0, 7752.0], [0.1, 7752.0], [0.2, 7752.0], [0.3, 7752.0], [0.4, 7752.0], [0.5, 7752.0], [0.6, 7752.0], [0.7, 7752.0], [0.8, 7752.0], [0.9, 7752.0], [1.0, 7911.0], [1.1, 7911.0], [1.2, 7911.0], [1.3, 7911.0], [1.4, 7911.0], [1.5, 7911.0], [1.6, 7911.0], [1.7, 7911.0], [1.8, 7911.0], [1.9, 7911.0], [2.0, 7995.0], [2.1, 7995.0], [2.2, 7995.0], [2.3, 7995.0], [2.4, 7995.0], [2.5, 7995.0], [2.6, 7995.0], [2.7, 7995.0], [2.8, 7995.0], [2.9, 7995.0], [3.0, 8126.0], [3.1, 8126.0], [3.2, 8126.0], [3.3, 8126.0], [3.4, 8126.0], [3.5, 8126.0], [3.6, 8126.0], [3.7, 8126.0], [3.8, 8126.0], [3.9, 8126.0], [4.0, 8210.0], [4.1, 8210.0], [4.2, 8210.0], [4.3, 8210.0], [4.4, 8210.0], [4.5, 8210.0], [4.6, 8210.0], [4.7, 8210.0], [4.8, 8210.0], [4.9, 8210.0], [5.0, 8212.0], [5.1, 8212.0], [5.2, 8212.0], [5.3, 8212.0], [5.4, 8212.0], [5.5, 8212.0], [5.6, 8212.0], [5.7, 8212.0], [5.8, 8212.0], [5.9, 8212.0], [6.0, 8542.0], [6.1, 8542.0], [6.2, 8542.0], [6.3, 8542.0], [6.4, 8542.0], [6.5, 8542.0], [6.6, 8542.0], [6.7, 8542.0], [6.8, 8542.0], [6.9, 8542.0], [7.0, 8602.0], [7.1, 8602.0], [7.2, 8602.0], [7.3, 8602.0], [7.4, 8602.0], [7.5, 8602.0], [7.6, 8602.0], [7.7, 8602.0], [7.8, 8602.0], [7.9, 8602.0], [8.0, 8982.0], [8.1, 8982.0], [8.2, 8982.0], [8.3, 8982.0], [8.4, 8982.0], [8.5, 8982.0], [8.6, 8982.0], [8.7, 8982.0], [8.8, 8982.0], [8.9, 8982.0], [9.0, 8983.0], [9.1, 8983.0], [9.2, 8983.0], [9.3, 8983.0], [9.4, 8983.0], [9.5, 8983.0], [9.6, 8983.0], [9.7, 8983.0], [9.8, 8983.0], [9.9, 8983.0], [10.0, 13374.0], [10.1, 13374.0], [10.2, 13374.0], [10.3, 13374.0], [10.4, 13374.0], [10.5, 13374.0], [10.6, 13374.0], [10.7, 13374.0], [10.8, 13374.0], [10.9, 13374.0], [11.0, 13947.0], [11.1, 13947.0], [11.2, 13947.0], [11.3, 13947.0], [11.4, 13947.0], [11.5, 13947.0], [11.6, 13947.0], [11.7, 13947.0], [11.8, 13947.0], [11.9, 13947.0], [12.0, 14227.0], [12.1, 14227.0], [12.2, 14227.0], [12.3, 14227.0], [12.4, 14227.0], [12.5, 14227.0], [12.6, 14227.0], [12.7, 14227.0], [12.8, 14227.0], [12.9, 14227.0], [13.0, 14246.0], [13.1, 14246.0], [13.2, 14246.0], [13.3, 14246.0], [13.4, 14246.0], [13.5, 14246.0], [13.6, 14246.0], [13.7, 14246.0], [13.8, 14246.0], [13.9, 14246.0], [14.0, 14264.0], [14.1, 14264.0], [14.2, 14264.0], [14.3, 14264.0], [14.4, 14264.0], [14.5, 14264.0], [14.6, 14264.0], [14.7, 14264.0], [14.8, 14264.0], [14.9, 14264.0], [15.0, 14624.0], [15.1, 14624.0], [15.2, 14624.0], [15.3, 14624.0], [15.4, 14624.0], [15.5, 14624.0], [15.6, 14624.0], [15.7, 14624.0], [15.8, 14624.0], [15.9, 14624.0], [16.0, 14790.0], [16.1, 14790.0], [16.2, 14790.0], [16.3, 14790.0], [16.4, 14790.0], [16.5, 14790.0], [16.6, 14790.0], [16.7, 14790.0], [16.8, 14790.0], [16.9, 14790.0], [17.0, 14820.0], [17.1, 14820.0], [17.2, 14820.0], [17.3, 14820.0], [17.4, 14820.0], [17.5, 14820.0], [17.6, 14820.0], [17.7, 14820.0], [17.8, 14820.0], [17.9, 14820.0], [18.0, 14973.0], [18.1, 14973.0], [18.2, 14973.0], [18.3, 14973.0], [18.4, 14973.0], [18.5, 14973.0], [18.6, 14973.0], [18.7, 14973.0], [18.8, 14973.0], [18.9, 14973.0], [19.0, 15541.0], [19.1, 15541.0], [19.2, 15541.0], [19.3, 15541.0], [19.4, 15541.0], [19.5, 15541.0], [19.6, 15541.0], [19.7, 15541.0], [19.8, 15541.0], [19.9, 15541.0], [20.0, 20957.0], [20.1, 20957.0], [20.2, 20957.0], [20.3, 20957.0], [20.4, 20957.0], [20.5, 20957.0], [20.6, 20957.0], [20.7, 20957.0], [20.8, 20957.0], [20.9, 20957.0], [21.0, 21109.0], [21.1, 21109.0], [21.2, 21109.0], [21.3, 21109.0], [21.4, 21109.0], [21.5, 21109.0], [21.6, 21109.0], [21.7, 21109.0], [21.8, 21109.0], [21.9, 21109.0], [22.0, 21358.0], [22.1, 21358.0], [22.2, 21358.0], [22.3, 21358.0], [22.4, 21358.0], [22.5, 21358.0], [22.6, 21358.0], [22.7, 21358.0], [22.8, 21358.0], [22.9, 21358.0], [23.0, 21366.0], [23.1, 21366.0], [23.2, 21366.0], [23.3, 21366.0], [23.4, 21366.0], [23.5, 21366.0], [23.6, 21366.0], [23.7, 21366.0], [23.8, 21366.0], [23.9, 21366.0], [24.0, 21429.0], [24.1, 21429.0], [24.2, 21429.0], [24.3, 21429.0], [24.4, 21429.0], [24.5, 21429.0], [24.6, 21429.0], [24.7, 21429.0], [24.8, 21429.0], [24.9, 21429.0], [25.0, 21647.0], [25.1, 21647.0], [25.2, 21647.0], [25.3, 21647.0], [25.4, 21647.0], [25.5, 21647.0], [25.6, 21647.0], [25.7, 21647.0], [25.8, 21647.0], [25.9, 21647.0], [26.0, 22262.0], [26.1, 22262.0], [26.2, 22262.0], [26.3, 22262.0], [26.4, 22262.0], [26.5, 22262.0], [26.6, 22262.0], [26.7, 22262.0], [26.8, 22262.0], [26.9, 22262.0], [27.0, 22321.0], [27.1, 22321.0], [27.2, 22321.0], [27.3, 22321.0], [27.4, 22321.0], [27.5, 22321.0], [27.6, 22321.0], [27.7, 22321.0], [27.8, 22321.0], [27.9, 22321.0], [28.0, 23356.0], [28.1, 23356.0], [28.2, 23356.0], [28.3, 23356.0], [28.4, 23356.0], [28.5, 23356.0], [28.6, 23356.0], [28.7, 23356.0], [28.8, 23356.0], [28.9, 23356.0], [29.0, 23477.0], [29.1, 23477.0], [29.2, 23477.0], [29.3, 23477.0], [29.4, 23477.0], [29.5, 23477.0], [29.6, 23477.0], [29.7, 23477.0], [29.8, 23477.0], [29.9, 23477.0], [30.0, 27226.0], [30.1, 27226.0], [30.2, 27226.0], [30.3, 27226.0], [30.4, 27226.0], [30.5, 27226.0], [30.6, 27226.0], [30.7, 27226.0], [30.8, 27226.0], [30.9, 27226.0], [31.0, 28981.0], [31.1, 28981.0], [31.2, 28981.0], [31.3, 28981.0], [31.4, 28981.0], [31.5, 28981.0], [31.6, 28981.0], [31.7, 28981.0], [31.8, 28981.0], [31.9, 28981.0], [32.0, 29059.0], [32.1, 29059.0], [32.2, 29059.0], [32.3, 29059.0], [32.4, 29059.0], [32.5, 29059.0], [32.6, 29059.0], [32.7, 29059.0], [32.8, 29059.0], [32.9, 29059.0], [33.0, 29086.0], [33.1, 29086.0], [33.2, 29086.0], [33.3, 29086.0], [33.4, 29086.0], [33.5, 29086.0], [33.6, 29086.0], [33.7, 29086.0], [33.8, 29086.0], [33.9, 29086.0], [34.0, 29440.0], [34.1, 29440.0], [34.2, 29440.0], [34.3, 29440.0], [34.4, 29440.0], [34.5, 29440.0], [34.6, 29440.0], [34.7, 29440.0], [34.8, 29440.0], [34.9, 29440.0], [35.0, 29481.0], [35.1, 29481.0], [35.2, 29481.0], [35.3, 29481.0], [35.4, 29481.0], [35.5, 29481.0], [35.6, 29481.0], [35.7, 29481.0], [35.8, 29481.0], [35.9, 29481.0], [36.0, 29916.0], [36.1, 29916.0], [36.2, 29916.0], [36.3, 29916.0], [36.4, 29916.0], [36.5, 29916.0], [36.6, 29916.0], [36.7, 29916.0], [36.8, 29916.0], [36.9, 29916.0], [37.0, 29977.0], [37.1, 29977.0], [37.2, 29977.0], [37.3, 29977.0], [37.4, 29977.0], [37.5, 29977.0], [37.6, 29977.0], [37.7, 29977.0], [37.8, 29977.0], [37.9, 29977.0], [38.0, 30046.0], [38.1, 30046.0], [38.2, 30046.0], [38.3, 30046.0], [38.4, 30046.0], [38.5, 30046.0], [38.6, 30046.0], [38.7, 30046.0], [38.8, 30046.0], [38.9, 30046.0], [39.0, 31245.0], [39.1, 31245.0], [39.2, 31245.0], [39.3, 31245.0], [39.4, 31245.0], [39.5, 31245.0], [39.6, 31245.0], [39.7, 31245.0], [39.8, 31245.0], [39.9, 31245.0], [40.0, 33749.0], [40.1, 33749.0], [40.2, 33749.0], [40.3, 33749.0], [40.4, 33749.0], [40.5, 33749.0], [40.6, 33749.0], [40.7, 33749.0], [40.8, 33749.0], [40.9, 33749.0], [41.0, 34713.0], [41.1, 34713.0], [41.2, 34713.0], [41.3, 34713.0], [41.4, 34713.0], [41.5, 34713.0], [41.6, 34713.0], [41.7, 34713.0], [41.8, 34713.0], [41.9, 34713.0], [42.0, 35104.0], [42.1, 35104.0], [42.2, 35104.0], [42.3, 35104.0], [42.4, 35104.0], [42.5, 35104.0], [42.6, 35104.0], [42.7, 35104.0], [42.8, 35104.0], [42.9, 35104.0], [43.0, 35156.0], [43.1, 35156.0], [43.2, 35156.0], [43.3, 35156.0], [43.4, 35156.0], [43.5, 35156.0], [43.6, 35156.0], [43.7, 35156.0], [43.8, 35156.0], [43.9, 35156.0], [44.0, 35167.0], [44.1, 35167.0], [44.2, 35167.0], [44.3, 35167.0], [44.4, 35167.0], [44.5, 35167.0], [44.6, 35167.0], [44.7, 35167.0], [44.8, 35167.0], [44.9, 35167.0], [45.0, 35262.0], [45.1, 35262.0], [45.2, 35262.0], [45.3, 35262.0], [45.4, 35262.0], [45.5, 35262.0], [45.6, 35262.0], [45.7, 35262.0], [45.8, 35262.0], [45.9, 35262.0], [46.0, 35620.0], [46.1, 35620.0], [46.2, 35620.0], [46.3, 35620.0], [46.4, 35620.0], [46.5, 35620.0], [46.6, 35620.0], [46.7, 35620.0], [46.8, 35620.0], [46.9, 35620.0], [47.0, 36619.0], [47.1, 36619.0], [47.2, 36619.0], [47.3, 36619.0], [47.4, 36619.0], [47.5, 36619.0], [47.6, 36619.0], [47.7, 36619.0], [47.8, 36619.0], [47.9, 36619.0], [48.0, 36774.0], [48.1, 36774.0], [48.2, 36774.0], [48.3, 36774.0], [48.4, 36774.0], [48.5, 36774.0], [48.6, 36774.0], [48.7, 36774.0], [48.8, 36774.0], [48.9, 36774.0], [49.0, 38307.0], [49.1, 38307.0], [49.2, 38307.0], [49.3, 38307.0], [49.4, 38307.0], [49.5, 38307.0], [49.6, 38307.0], [49.7, 38307.0], [49.8, 38307.0], [49.9, 38307.0], [50.0, 39643.0], [50.1, 39643.0], [50.2, 39643.0], [50.3, 39643.0], [50.4, 39643.0], [50.5, 39643.0], [50.6, 39643.0], [50.7, 39643.0], [50.8, 39643.0], [50.9, 39643.0], [51.0, 40778.0], [51.1, 40778.0], [51.2, 40778.0], [51.3, 40778.0], [51.4, 40778.0], [51.5, 40778.0], [51.6, 40778.0], [51.7, 40778.0], [51.8, 40778.0], [51.9, 40778.0], [52.0, 41010.0], [52.1, 41010.0], [52.2, 41010.0], [52.3, 41010.0], [52.4, 41010.0], [52.5, 41010.0], [52.6, 41010.0], [52.7, 41010.0], [52.8, 41010.0], [52.9, 41010.0], [53.0, 41603.0], [53.1, 41603.0], [53.2, 41603.0], [53.3, 41603.0], [53.4, 41603.0], [53.5, 41603.0], [53.6, 41603.0], [53.7, 41603.0], [53.8, 41603.0], [53.9, 41603.0], [54.0, 41711.0], [54.1, 41711.0], [54.2, 41711.0], [54.3, 41711.0], [54.4, 41711.0], [54.5, 41711.0], [54.6, 41711.0], [54.7, 41711.0], [54.8, 41711.0], [54.9, 41711.0], [55.0, 41763.0], [55.1, 41763.0], [55.2, 41763.0], [55.3, 41763.0], [55.4, 41763.0], [55.5, 41763.0], [55.6, 41763.0], [55.7, 41763.0], [55.8, 41763.0], [55.9, 41763.0], [56.0, 42443.0], [56.1, 42443.0], [56.2, 42443.0], [56.3, 42443.0], [56.4, 42443.0], [56.5, 42443.0], [56.6, 42443.0], [56.7, 42443.0], [56.8, 42443.0], [56.9, 42443.0], [57.0, 42513.0], [57.1, 42513.0], [57.2, 42513.0], [57.3, 42513.0], [57.4, 42513.0], [57.5, 42513.0], [57.6, 42513.0], [57.7, 42513.0], [57.8, 42513.0], [57.9, 42513.0], [58.0, 42762.0], [58.1, 42762.0], [58.2, 42762.0], [58.3, 42762.0], [58.4, 42762.0], [58.5, 42762.0], [58.6, 42762.0], [58.7, 42762.0], [58.8, 42762.0], [58.9, 42762.0], [59.0, 43470.0], [59.1, 43470.0], [59.2, 43470.0], [59.3, 43470.0], [59.4, 43470.0], [59.5, 43470.0], [59.6, 43470.0], [59.7, 43470.0], [59.8, 43470.0], [59.9, 43470.0], [60.0, 45665.0], [60.1, 45665.0], [60.2, 45665.0], [60.3, 45665.0], [60.4, 45665.0], [60.5, 45665.0], [60.6, 45665.0], [60.7, 45665.0], [60.8, 45665.0], [60.9, 45665.0], [61.0, 46085.0], [61.1, 46085.0], [61.2, 46085.0], [61.3, 46085.0], [61.4, 46085.0], [61.5, 46085.0], [61.6, 46085.0], [61.7, 46085.0], [61.8, 46085.0], [61.9, 46085.0], [62.0, 47438.0], [62.1, 47438.0], [62.2, 47438.0], [62.3, 47438.0], [62.4, 47438.0], [62.5, 47438.0], [62.6, 47438.0], [62.7, 47438.0], [62.8, 47438.0], [62.9, 47438.0], [63.0, 48205.0], [63.1, 48205.0], [63.2, 48205.0], [63.3, 48205.0], [63.4, 48205.0], [63.5, 48205.0], [63.6, 48205.0], [63.7, 48205.0], [63.8, 48205.0], [63.9, 48205.0], [64.0, 48347.0], [64.1, 48347.0], [64.2, 48347.0], [64.3, 48347.0], [64.4, 48347.0], [64.5, 48347.0], [64.6, 48347.0], [64.7, 48347.0], [64.8, 48347.0], [64.9, 48347.0], [65.0, 48649.0], [65.1, 48649.0], [65.2, 48649.0], [65.3, 48649.0], [65.4, 48649.0], [65.5, 48649.0], [65.6, 48649.0], [65.7, 48649.0], [65.8, 48649.0], [65.9, 48649.0], [66.0, 49122.0], [66.1, 49122.0], [66.2, 49122.0], [66.3, 49122.0], [66.4, 49122.0], [66.5, 49122.0], [66.6, 49122.0], [66.7, 49122.0], [66.8, 49122.0], [66.9, 49122.0], [67.0, 49888.0], [67.1, 49888.0], [67.2, 49888.0], [67.3, 49888.0], [67.4, 49888.0], [67.5, 49888.0], [67.6, 49888.0], [67.7, 49888.0], [67.8, 49888.0], [67.9, 49888.0], [68.0, 49892.0], [68.1, 49892.0], [68.2, 49892.0], [68.3, 49892.0], [68.4, 49892.0], [68.5, 49892.0], [68.6, 49892.0], [68.7, 49892.0], [68.8, 49892.0], [68.9, 49892.0], [69.0, 50286.0], [69.1, 50286.0], [69.2, 50286.0], [69.3, 50286.0], [69.4, 50286.0], [69.5, 50286.0], [69.6, 50286.0], [69.7, 50286.0], [69.8, 50286.0], [69.9, 50286.0], [70.0, 51644.0], [70.1, 51644.0], [70.2, 51644.0], [70.3, 51644.0], [70.4, 51644.0], [70.5, 51644.0], [70.6, 51644.0], [70.7, 51644.0], [70.8, 51644.0], [70.9, 51644.0], [71.0, 51929.0], [71.1, 51929.0], [71.2, 51929.0], [71.3, 51929.0], [71.4, 51929.0], [71.5, 51929.0], [71.6, 51929.0], [71.7, 51929.0], [71.8, 51929.0], [71.9, 51929.0], [72.0, 53168.0], [72.1, 53168.0], [72.2, 53168.0], [72.3, 53168.0], [72.4, 53168.0], [72.5, 53168.0], [72.6, 53168.0], [72.7, 53168.0], [72.8, 53168.0], [72.9, 53168.0], [73.0, 53457.0], [73.1, 53457.0], [73.2, 53457.0], [73.3, 53457.0], [73.4, 53457.0], [73.5, 53457.0], [73.6, 53457.0], [73.7, 53457.0], [73.8, 53457.0], [73.9, 53457.0], [74.0, 53698.0], [74.1, 53698.0], [74.2, 53698.0], [74.3, 53698.0], [74.4, 53698.0], [74.5, 53698.0], [74.6, 53698.0], [74.7, 53698.0], [74.8, 53698.0], [74.9, 53698.0], [75.0, 54044.0], [75.1, 54044.0], [75.2, 54044.0], [75.3, 54044.0], [75.4, 54044.0], [75.5, 54044.0], [75.6, 54044.0], [75.7, 54044.0], [75.8, 54044.0], [75.9, 54044.0], [76.0, 54468.0], [76.1, 54468.0], [76.2, 54468.0], [76.3, 54468.0], [76.4, 54468.0], [76.5, 54468.0], [76.6, 54468.0], [76.7, 54468.0], [76.8, 54468.0], [76.9, 54468.0], [77.0, 54982.0], [77.1, 54982.0], [77.2, 54982.0], [77.3, 54982.0], [77.4, 54982.0], [77.5, 54982.0], [77.6, 54982.0], [77.7, 54982.0], [77.8, 54982.0], [77.9, 54982.0], [78.0, 55809.0], [78.1, 55809.0], [78.2, 55809.0], [78.3, 55809.0], [78.4, 55809.0], [78.5, 55809.0], [78.6, 55809.0], [78.7, 55809.0], [78.8, 55809.0], [78.9, 55809.0], [79.0, 55948.0], [79.1, 55948.0], [79.2, 55948.0], [79.3, 55948.0], [79.4, 55948.0], [79.5, 55948.0], [79.6, 55948.0], [79.7, 55948.0], [79.8, 55948.0], [79.9, 55948.0], [80.0, 57674.0], [80.1, 57674.0], [80.2, 57674.0], [80.3, 57674.0], [80.4, 57674.0], [80.5, 57674.0], [80.6, 57674.0], [80.7, 57674.0], [80.8, 57674.0], [80.9, 57674.0], [81.0, 58100.0], [81.1, 58100.0], [81.2, 58100.0], [81.3, 58100.0], [81.4, 58100.0], [81.5, 58100.0], [81.6, 58100.0], [81.7, 58100.0], [81.8, 58100.0], [81.9, 58100.0], [82.0, 58801.0], [82.1, 58801.0], [82.2, 58801.0], [82.3, 58801.0], [82.4, 58801.0], [82.5, 58801.0], [82.6, 58801.0], [82.7, 58801.0], [82.8, 58801.0], [82.9, 58801.0], [83.0, 59082.0], [83.1, 59082.0], [83.2, 59082.0], [83.3, 59082.0], [83.4, 59082.0], [83.5, 59082.0], [83.6, 59082.0], [83.7, 59082.0], [83.8, 59082.0], [83.9, 59082.0], [84.0, 59739.0], [84.1, 59739.0], [84.2, 59739.0], [84.3, 59739.0], [84.4, 59739.0], [84.5, 59739.0], [84.6, 59739.0], [84.7, 59739.0], [84.8, 59739.0], [84.9, 59739.0], [85.0, 59808.0], [85.1, 59808.0], [85.2, 59808.0], [85.3, 59808.0], [85.4, 59808.0], [85.5, 59808.0], [85.6, 59808.0], [85.7, 59808.0], [85.8, 59808.0], [85.9, 59808.0], [86.0, 61131.0], [86.1, 61131.0], [86.2, 61131.0], [86.3, 61131.0], [86.4, 61131.0], [86.5, 61131.0], [86.6, 61131.0], [86.7, 61131.0], [86.8, 61131.0], [86.9, 61131.0], [87.0, 61334.0], [87.1, 61334.0], [87.2, 61334.0], [87.3, 61334.0], [87.4, 61334.0], [87.5, 61334.0], [87.6, 61334.0], [87.7, 61334.0], [87.8, 61334.0], [87.9, 61334.0], [88.0, 62320.0], [88.1, 62320.0], [88.2, 62320.0], [88.3, 62320.0], [88.4, 62320.0], [88.5, 62320.0], [88.6, 62320.0], [88.7, 62320.0], [88.8, 62320.0], [88.9, 62320.0], [89.0, 62587.0], [89.1, 62587.0], [89.2, 62587.0], [89.3, 62587.0], [89.4, 62587.0], [89.5, 62587.0], [89.6, 62587.0], [89.7, 62587.0], [89.8, 62587.0], [89.9, 62587.0], [90.0, 63318.0], [90.1, 63318.0], [90.2, 63318.0], [90.3, 63318.0], [90.4, 63318.0], [90.5, 63318.0], [90.6, 63318.0], [90.7, 63318.0], [90.8, 63318.0], [90.9, 63318.0], [91.0, 64021.0], [91.1, 64021.0], [91.2, 64021.0], [91.3, 64021.0], [91.4, 64021.0], [91.5, 64021.0], [91.6, 64021.0], [91.7, 64021.0], [91.8, 64021.0], [91.9, 64021.0], [92.0, 64289.0], [92.1, 64289.0], [92.2, 64289.0], [92.3, 64289.0], [92.4, 64289.0], [92.5, 64289.0], [92.6, 64289.0], [92.7, 64289.0], [92.8, 64289.0], [92.9, 64289.0], [93.0, 64772.0], [93.1, 64772.0], [93.2, 64772.0], [93.3, 64772.0], [93.4, 64772.0], [93.5, 64772.0], [93.6, 64772.0], [93.7, 64772.0], [93.8, 64772.0], [93.9, 64772.0], [94.0, 65327.0], [94.1, 65327.0], [94.2, 65327.0], [94.3, 65327.0], [94.4, 65327.0], [94.5, 65327.0], [94.6, 65327.0], [94.7, 65327.0], [94.8, 65327.0], [94.9, 65327.0], [95.0, 65591.0], [95.1, 65591.0], [95.2, 65591.0], [95.3, 65591.0], [95.4, 65591.0], [95.5, 65591.0], [95.6, 65591.0], [95.7, 65591.0], [95.8, 65591.0], [95.9, 65591.0], [96.0, 65929.0], [96.1, 65929.0], [96.2, 65929.0], [96.3, 65929.0], [96.4, 65929.0], [96.5, 65929.0], [96.6, 65929.0], [96.7, 65929.0], [96.8, 65929.0], [96.9, 65929.0], [97.0, 65935.0], [97.1, 65935.0], [97.2, 65935.0], [97.3, 65935.0], [97.4, 65935.0], [97.5, 65935.0], [97.6, 65935.0], [97.7, 65935.0], [97.8, 65935.0], [97.9, 65935.0], [98.0, 65946.0], [98.1, 65946.0], [98.2, 65946.0], [98.3, 65946.0], [98.4, 65946.0], [98.5, 65946.0], [98.6, 65946.0], [98.7, 65946.0], [98.8, 65946.0], [98.9, 65946.0], [99.0, 65980.0], [99.1, 65980.0], [99.2, 65980.0], [99.3, 65980.0], [99.4, 65980.0], [99.5, 65980.0], [99.6, 65980.0], [99.7, 65980.0], [99.8, 65980.0], [99.9, 65980.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 7700.0, "maxY": 4.0, "series": [{"data": [[65900.0, 4.0], [7700.0, 1.0], [7900.0, 2.0], [8100.0, 1.0], [8200.0, 2.0], [8500.0, 1.0], [8600.0, 1.0], [8900.0, 2.0], [13300.0, 1.0], [13900.0, 1.0], [14200.0, 3.0], [14600.0, 1.0], [14700.0, 1.0], [14800.0, 1.0], [14900.0, 1.0], [15500.0, 1.0], [20900.0, 1.0], [21100.0, 1.0], [21300.0, 2.0], [21400.0, 1.0], [21600.0, 1.0], [22200.0, 1.0], [22300.0, 1.0], [23300.0, 1.0], [23400.0, 1.0], [27200.0, 1.0], [28900.0, 1.0], [29000.0, 2.0], [29400.0, 2.0], [29900.0, 2.0], [30000.0, 1.0], [31200.0, 1.0], [33700.0, 1.0], [34700.0, 1.0], [35100.0, 3.0], [35200.0, 1.0], [35600.0, 1.0], [36600.0, 1.0], [36700.0, 1.0], [38300.0, 1.0], [39600.0, 1.0], [40700.0, 1.0], [41000.0, 1.0], [41600.0, 1.0], [41700.0, 2.0], [42400.0, 1.0], [42500.0, 1.0], [42700.0, 1.0], [43400.0, 1.0], [45600.0, 1.0], [46000.0, 1.0], [47400.0, 1.0], [48200.0, 1.0], [48300.0, 1.0], [48600.0, 1.0], [49100.0, 1.0], [49800.0, 2.0], [50200.0, 1.0], [51600.0, 1.0], [51900.0, 1.0], [53100.0, 1.0], [53400.0, 1.0], [53600.0, 1.0], [54000.0, 1.0], [54400.0, 1.0], [54900.0, 1.0], [55800.0, 1.0], [55900.0, 1.0], [57600.0, 1.0], [58100.0, 1.0], [58800.0, 1.0], [59000.0, 1.0], [59700.0, 1.0], [59800.0, 1.0], [61100.0, 1.0], [61300.0, 1.0], [62300.0, 1.0], [62500.0, 1.0], [63300.0, 1.0], [64000.0, 1.0], [64200.0, 1.0], [64700.0, 1.0], [65300.0, 1.0], [65500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 65900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 45.5, "minX": 1.66823526E12, "maxY": 95.6, "series": [{"data": [[1.66823526E12, 95.6], [1.66823532E12, 45.5]], "isOverall": false, "label": "client-to-application", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823532E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 7752.0, "minX": 1.0, "maxY": 65980.0, "series": [{"data": [[2.0, 65946.0], [3.0, 65935.0], [4.0, 65929.0], [5.0, 65591.0], [6.0, 65327.0], [7.0, 64772.0], [8.0, 64289.0], [9.0, 64021.0], [10.0, 63318.0], [11.0, 62587.0], [12.0, 62320.0], [13.0, 61334.0], [14.0, 61131.0], [15.0, 59808.0], [16.0, 59739.0], [17.0, 59082.0], [18.0, 58801.0], [19.0, 58100.0], [20.0, 57674.0], [21.0, 55948.0], [22.0, 55809.0], [23.0, 54982.0], [24.0, 54468.0], [25.0, 54044.0], [26.0, 53698.0], [27.0, 53457.0], [28.0, 53168.0], [29.0, 51929.0], [30.0, 51644.0], [31.0, 50286.0], [33.0, 49888.0], [32.0, 49892.0], [35.0, 48649.0], [34.0, 49122.0], [37.0, 48205.0], [36.0, 48347.0], [39.0, 46085.0], [38.0, 47438.0], [41.0, 43470.0], [40.0, 45665.0], [43.0, 42513.0], [42.0, 42762.0], [45.0, 41763.0], [44.0, 42443.0], [47.0, 41603.0], [46.0, 41711.0], [49.0, 40778.0], [48.0, 41010.0], [51.0, 38307.0], [50.0, 39643.0], [53.0, 36619.0], [52.0, 36774.0], [55.0, 35262.0], [54.0, 35620.0], [57.0, 35167.0], [56.0, 35156.0], [59.0, 34713.0], [58.0, 35104.0], [61.0, 31245.0], [60.0, 33749.0], [63.0, 29977.0], [62.0, 30046.0], [67.0, 29086.0], [66.0, 29440.0], [65.0, 29481.0], [64.0, 29916.0], [71.0, 23477.0], [70.0, 27226.0], [69.0, 28981.0], [68.0, 29059.0], [75.0, 21647.0], [74.0, 22262.0], [73.0, 22321.0], [72.0, 23356.0], [79.0, 21109.0], [78.0, 21358.0], [77.0, 21366.0], [76.0, 21429.0], [83.0, 14820.0], [82.0, 14973.0], [81.0, 15541.0], [80.0, 20957.0], [87.0, 14246.0], [86.0, 14264.0], [85.0, 14624.0], [84.0, 14790.0], [90.0, 13374.0], [89.0, 13947.0], [88.0, 14227.0], [95.0, 8212.0], [94.0, 8542.0], [93.0, 8602.0], [92.0, 8982.5], [99.0, 7911.0], [98.0, 7995.0], [97.0, 8126.0], [96.0, 8210.0], [100.0, 7752.0], [1.0, 65980.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.51, 37904.34999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 21.333333333333332, "minX": 1.66823526E12, "maxY": 1.69942065E7, "series": [{"data": [[1.66823526E12, 1888245.1666666667], [1.66823532E12, 1.69942065E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66823526E12, 21.333333333333332], [1.66823532E12, 192.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823532E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 8331.5, "minX": 1.66823526E12, "maxY": 41190.22222222222, "series": [{"data": [[1.66823526E12, 8331.5], [1.66823532E12, 41190.22222222222]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823532E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5949.7, "minX": 1.66823526E12, "maxY": 38916.755555555574, "series": [{"data": [[1.66823526E12, 5949.7], [1.66823532E12, 38916.755555555574]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823532E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 10.5, "minX": 1.66823526E12, "maxY": 30.52222222222222, "series": [{"data": [[1.66823526E12, 10.5], [1.66823532E12, 30.52222222222222]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823532E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 7752.0, "minX": 1.66823526E12, "maxY": 65980.0, "series": [{"data": [[1.66823526E12, 8983.0], [1.66823532E12, 65980.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66823526E12, 8982.9], [1.66823532E12, 63950.700000000004]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66823526E12, 8983.0], [1.66823532E12, 65980.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66823526E12, 8983.0], [1.66823532E12, 65743.1]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66823526E12, 7752.0], [1.66823532E12, 13374.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66823526E12, 8211.0], [1.66823532E12, 41737.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823532E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14444.0, "minX": 1.0, "maxY": 53457.0, "series": [{"data": [[2.0, 30048.0], [1.0, 40210.5], [4.0, 41657.0], [5.0, 28375.5], [6.0, 14444.0], [3.0, 53457.0], [7.0, 29440.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12422.0, "minX": 1.0, "maxY": 51550.0, "series": [{"data": [[2.0, 27326.5], [1.0, 37737.0], [4.0, 39352.0], [5.0, 25955.0], [6.0, 12422.0], [3.0, 51550.0], [7.0, 27110.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66823526E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66823526E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823526E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.66823526E12, "maxY": 1.5, "series": [{"data": [[1.66823526E12, 0.16666666666666666], [1.66823532E12, 1.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66823532E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.66823526E12, "maxY": 1.5, "series": [{"data": [[1.66823526E12, 0.16666666666666666], [1.66823532E12, 1.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823532E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.66823526E12, "maxY": 1.5, "series": [{"data": [[1.66823526E12, 0.16666666666666666], [1.66823532E12, 1.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66823532E12, "title": "Total Transactions Per Second"}},
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

