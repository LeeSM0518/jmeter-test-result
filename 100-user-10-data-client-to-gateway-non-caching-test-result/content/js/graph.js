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
        data: {"result": {"minY": 6396.0, "minX": 0.0, "maxY": 67055.0, "series": [{"data": [[0.0, 6396.0], [0.1, 6396.0], [0.2, 6396.0], [0.3, 6396.0], [0.4, 6396.0], [0.5, 6396.0], [0.6, 6396.0], [0.7, 6396.0], [0.8, 6396.0], [0.9, 6396.0], [1.0, 6400.0], [1.1, 6400.0], [1.2, 6400.0], [1.3, 6400.0], [1.4, 6400.0], [1.5, 6400.0], [1.6, 6400.0], [1.7, 6400.0], [1.8, 6400.0], [1.9, 6400.0], [2.0, 6755.0], [2.1, 6755.0], [2.2, 6755.0], [2.3, 6755.0], [2.4, 6755.0], [2.5, 6755.0], [2.6, 6755.0], [2.7, 6755.0], [2.8, 6755.0], [2.9, 6755.0], [3.0, 7091.0], [3.1, 7091.0], [3.2, 7091.0], [3.3, 7091.0], [3.4, 7091.0], [3.5, 7091.0], [3.6, 7091.0], [3.7, 7091.0], [3.8, 7091.0], [3.9, 7091.0], [4.0, 7291.0], [4.1, 7291.0], [4.2, 7291.0], [4.3, 7291.0], [4.4, 7291.0], [4.5, 7291.0], [4.6, 7291.0], [4.7, 7291.0], [4.8, 7291.0], [4.9, 7291.0], [5.0, 7303.0], [5.1, 7303.0], [5.2, 7303.0], [5.3, 7303.0], [5.4, 7303.0], [5.5, 7303.0], [5.6, 7303.0], [5.7, 7303.0], [5.8, 7303.0], [5.9, 7303.0], [6.0, 7416.0], [6.1, 7416.0], [6.2, 7416.0], [6.3, 7416.0], [6.4, 7416.0], [6.5, 7416.0], [6.6, 7416.0], [6.7, 7416.0], [6.8, 7416.0], [6.9, 7416.0], [7.0, 7520.0], [7.1, 7520.0], [7.2, 7520.0], [7.3, 7520.0], [7.4, 7520.0], [7.5, 7520.0], [7.6, 7520.0], [7.7, 7520.0], [7.8, 7520.0], [7.9, 7520.0], [8.0, 7657.0], [8.1, 7657.0], [8.2, 7657.0], [8.3, 7657.0], [8.4, 7657.0], [8.5, 7657.0], [8.6, 7657.0], [8.7, 7657.0], [8.8, 7657.0], [8.9, 7657.0], [9.0, 7916.0], [9.1, 7916.0], [9.2, 7916.0], [9.3, 7916.0], [9.4, 7916.0], [9.5, 7916.0], [9.6, 7916.0], [9.7, 7916.0], [9.8, 7916.0], [9.9, 7916.0], [10.0, 13057.0], [10.1, 13057.0], [10.2, 13057.0], [10.3, 13057.0], [10.4, 13057.0], [10.5, 13057.0], [10.6, 13057.0], [10.7, 13057.0], [10.8, 13057.0], [10.9, 13057.0], [11.0, 13691.0], [11.1, 13691.0], [11.2, 13691.0], [11.3, 13691.0], [11.4, 13691.0], [11.5, 13691.0], [11.6, 13691.0], [11.7, 13691.0], [11.8, 13691.0], [11.9, 13691.0], [12.0, 13986.0], [12.1, 13986.0], [12.2, 13986.0], [12.3, 13986.0], [12.4, 13986.0], [12.5, 13986.0], [12.6, 13986.0], [12.7, 13986.0], [12.8, 13986.0], [12.9, 13986.0], [13.0, 14127.0], [13.1, 14127.0], [13.2, 14127.0], [13.3, 14127.0], [13.4, 14127.0], [13.5, 14127.0], [13.6, 14127.0], [13.7, 14127.0], [13.8, 14127.0], [13.9, 14127.0], [14.0, 14144.0], [14.1, 14144.0], [14.2, 14144.0], [14.3, 14144.0], [14.4, 14144.0], [14.5, 14144.0], [14.6, 14144.0], [14.7, 14144.0], [14.8, 14144.0], [14.9, 14144.0], [15.0, 14402.0], [15.1, 14402.0], [15.2, 14402.0], [15.3, 14402.0], [15.4, 14402.0], [15.5, 14402.0], [15.6, 14402.0], [15.7, 14402.0], [15.8, 14402.0], [15.9, 14402.0], [16.0, 14847.0], [16.1, 14847.0], [16.2, 14847.0], [16.3, 14847.0], [16.4, 14847.0], [16.5, 14847.0], [16.6, 14847.0], [16.7, 14847.0], [16.8, 14847.0], [16.9, 14847.0], [17.0, 14967.0], [17.1, 14967.0], [17.2, 14967.0], [17.3, 14967.0], [17.4, 14967.0], [17.5, 14967.0], [17.6, 14967.0], [17.7, 14967.0], [17.8, 14967.0], [17.9, 14967.0], [18.0, 14981.0], [18.1, 14981.0], [18.2, 14981.0], [18.3, 14981.0], [18.4, 14981.0], [18.5, 14981.0], [18.6, 14981.0], [18.7, 14981.0], [18.8, 14981.0], [18.9, 14981.0], [19.0, 15436.0], [19.1, 15436.0], [19.2, 15436.0], [19.3, 15436.0], [19.4, 15436.0], [19.5, 15436.0], [19.6, 15436.0], [19.7, 15436.0], [19.8, 15436.0], [19.9, 15436.0], [20.0, 18628.0], [20.1, 18628.0], [20.2, 18628.0], [20.3, 18628.0], [20.4, 18628.0], [20.5, 18628.0], [20.6, 18628.0], [20.7, 18628.0], [20.8, 18628.0], [20.9, 18628.0], [21.0, 20857.0], [21.1, 20857.0], [21.2, 20857.0], [21.3, 20857.0], [21.4, 20857.0], [21.5, 20857.0], [21.6, 20857.0], [21.7, 20857.0], [21.8, 20857.0], [21.9, 20857.0], [22.0, 21170.0], [22.1, 21170.0], [22.2, 21170.0], [22.3, 21170.0], [22.4, 21170.0], [22.5, 21170.0], [22.6, 21170.0], [22.7, 21170.0], [22.8, 21170.0], [22.9, 21170.0], [23.0, 21751.0], [23.1, 21751.0], [23.2, 21751.0], [23.3, 21751.0], [23.4, 21751.0], [23.5, 21751.0], [23.6, 21751.0], [23.7, 21751.0], [23.8, 21751.0], [23.9, 21751.0], [24.0, 22105.0], [24.1, 22105.0], [24.2, 22105.0], [24.3, 22105.0], [24.4, 22105.0], [24.5, 22105.0], [24.6, 22105.0], [24.7, 22105.0], [24.8, 22105.0], [24.9, 22105.0], [25.0, 22238.0], [25.1, 22238.0], [25.2, 22238.0], [25.3, 22238.0], [25.4, 22238.0], [25.5, 22238.0], [25.6, 22238.0], [25.7, 22238.0], [25.8, 22238.0], [25.9, 22238.0], [26.0, 22508.0], [26.1, 22508.0], [26.2, 22508.0], [26.3, 22508.0], [26.4, 22508.0], [26.5, 22508.0], [26.6, 22508.0], [26.7, 22508.0], [26.8, 22508.0], [26.9, 22508.0], [27.0, 23150.0], [27.1, 23150.0], [27.2, 23150.0], [27.3, 23150.0], [27.4, 23150.0], [27.5, 23150.0], [27.6, 23150.0], [27.7, 23150.0], [27.8, 23150.0], [27.9, 23150.0], [28.0, 23184.0], [28.1, 23184.0], [28.2, 23184.0], [28.3, 23184.0], [28.4, 23184.0], [28.5, 23184.0], [28.6, 23184.0], [28.7, 23184.0], [28.8, 23184.0], [28.9, 23184.0], [29.0, 23760.0], [29.1, 23760.0], [29.2, 23760.0], [29.3, 23760.0], [29.4, 23760.0], [29.5, 23760.0], [29.6, 23760.0], [29.7, 23760.0], [29.8, 23760.0], [29.9, 23760.0], [30.0, 26906.0], [30.1, 26906.0], [30.2, 26906.0], [30.3, 26906.0], [30.4, 26906.0], [30.5, 26906.0], [30.6, 26906.0], [30.7, 26906.0], [30.8, 26906.0], [30.9, 26906.0], [31.0, 27475.0], [31.1, 27475.0], [31.2, 27475.0], [31.3, 27475.0], [31.4, 27475.0], [31.5, 27475.0], [31.6, 27475.0], [31.7, 27475.0], [31.8, 27475.0], [31.9, 27475.0], [32.0, 28596.0], [32.1, 28596.0], [32.2, 28596.0], [32.3, 28596.0], [32.4, 28596.0], [32.5, 28596.0], [32.6, 28596.0], [32.7, 28596.0], [32.8, 28596.0], [32.9, 28596.0], [33.0, 29109.0], [33.1, 29109.0], [33.2, 29109.0], [33.3, 29109.0], [33.4, 29109.0], [33.5, 29109.0], [33.6, 29109.0], [33.7, 29109.0], [33.8, 29109.0], [33.9, 29109.0], [34.0, 29265.0], [34.1, 29265.0], [34.2, 29265.0], [34.3, 29265.0], [34.4, 29265.0], [34.5, 29265.0], [34.6, 29265.0], [34.7, 29265.0], [34.8, 29265.0], [34.9, 29265.0], [35.0, 29513.0], [35.1, 29513.0], [35.2, 29513.0], [35.3, 29513.0], [35.4, 29513.0], [35.5, 29513.0], [35.6, 29513.0], [35.7, 29513.0], [35.8, 29513.0], [35.9, 29513.0], [36.0, 29520.0], [36.1, 29520.0], [36.2, 29520.0], [36.3, 29520.0], [36.4, 29520.0], [36.5, 29520.0], [36.6, 29520.0], [36.7, 29520.0], [36.8, 29520.0], [36.9, 29520.0], [37.0, 30782.0], [37.1, 30782.0], [37.2, 30782.0], [37.3, 30782.0], [37.4, 30782.0], [37.5, 30782.0], [37.6, 30782.0], [37.7, 30782.0], [37.8, 30782.0], [37.9, 30782.0], [38.0, 30954.0], [38.1, 30954.0], [38.2, 30954.0], [38.3, 30954.0], [38.4, 30954.0], [38.5, 30954.0], [38.6, 30954.0], [38.7, 30954.0], [38.8, 30954.0], [38.9, 30954.0], [39.0, 31506.0], [39.1, 31506.0], [39.2, 31506.0], [39.3, 31506.0], [39.4, 31506.0], [39.5, 31506.0], [39.6, 31506.0], [39.7, 31506.0], [39.8, 31506.0], [39.9, 31506.0], [40.0, 33435.0], [40.1, 33435.0], [40.2, 33435.0], [40.3, 33435.0], [40.4, 33435.0], [40.5, 33435.0], [40.6, 33435.0], [40.7, 33435.0], [40.8, 33435.0], [40.9, 33435.0], [41.0, 33755.0], [41.1, 33755.0], [41.2, 33755.0], [41.3, 33755.0], [41.4, 33755.0], [41.5, 33755.0], [41.6, 33755.0], [41.7, 33755.0], [41.8, 33755.0], [41.9, 33755.0], [42.0, 35209.0], [42.1, 35209.0], [42.2, 35209.0], [42.3, 35209.0], [42.4, 35209.0], [42.5, 35209.0], [42.6, 35209.0], [42.7, 35209.0], [42.8, 35209.0], [42.9, 35209.0], [43.0, 35343.0], [43.1, 35343.0], [43.2, 35343.0], [43.3, 35343.0], [43.4, 35343.0], [43.5, 35343.0], [43.6, 35343.0], [43.7, 35343.0], [43.8, 35343.0], [43.9, 35343.0], [44.0, 35485.0], [44.1, 35485.0], [44.2, 35485.0], [44.3, 35485.0], [44.4, 35485.0], [44.5, 35485.0], [44.6, 35485.0], [44.7, 35485.0], [44.8, 35485.0], [44.9, 35485.0], [45.0, 37126.0], [45.1, 37126.0], [45.2, 37126.0], [45.3, 37126.0], [45.4, 37126.0], [45.5, 37126.0], [45.6, 37126.0], [45.7, 37126.0], [45.8, 37126.0], [45.9, 37126.0], [46.0, 37303.0], [46.1, 37303.0], [46.2, 37303.0], [46.3, 37303.0], [46.4, 37303.0], [46.5, 37303.0], [46.6, 37303.0], [46.7, 37303.0], [46.8, 37303.0], [46.9, 37303.0], [47.0, 37840.0], [47.1, 37840.0], [47.2, 37840.0], [47.3, 37840.0], [47.4, 37840.0], [47.5, 37840.0], [47.6, 37840.0], [47.7, 37840.0], [47.8, 37840.0], [47.9, 37840.0], [48.0, 39299.0], [48.1, 39299.0], [48.2, 39299.0], [48.3, 39299.0], [48.4, 39299.0], [48.5, 39299.0], [48.6, 39299.0], [48.7, 39299.0], [48.8, 39299.0], [48.9, 39299.0], [49.0, 39429.0], [49.1, 39429.0], [49.2, 39429.0], [49.3, 39429.0], [49.4, 39429.0], [49.5, 39429.0], [49.6, 39429.0], [49.7, 39429.0], [49.8, 39429.0], [49.9, 39429.0], [50.0, 39434.0], [50.1, 39434.0], [50.2, 39434.0], [50.3, 39434.0], [50.4, 39434.0], [50.5, 39434.0], [50.6, 39434.0], [50.7, 39434.0], [50.8, 39434.0], [50.9, 39434.0], [51.0, 40195.0], [51.1, 40195.0], [51.2, 40195.0], [51.3, 40195.0], [51.4, 40195.0], [51.5, 40195.0], [51.6, 40195.0], [51.7, 40195.0], [51.8, 40195.0], [51.9, 40195.0], [52.0, 42275.0], [52.1, 42275.0], [52.2, 42275.0], [52.3, 42275.0], [52.4, 42275.0], [52.5, 42275.0], [52.6, 42275.0], [52.7, 42275.0], [52.8, 42275.0], [52.9, 42275.0], [53.0, 42309.0], [53.1, 42309.0], [53.2, 42309.0], [53.3, 42309.0], [53.4, 42309.0], [53.5, 42309.0], [53.6, 42309.0], [53.7, 42309.0], [53.8, 42309.0], [53.9, 42309.0], [54.0, 42391.0], [54.1, 42391.0], [54.2, 42391.0], [54.3, 42391.0], [54.4, 42391.0], [54.5, 42391.0], [54.6, 42391.0], [54.7, 42391.0], [54.8, 42391.0], [54.9, 42391.0], [55.0, 43540.0], [55.1, 43540.0], [55.2, 43540.0], [55.3, 43540.0], [55.4, 43540.0], [55.5, 43540.0], [55.6, 43540.0], [55.7, 43540.0], [55.8, 43540.0], [55.9, 43540.0], [56.0, 44345.0], [56.1, 44345.0], [56.2, 44345.0], [56.3, 44345.0], [56.4, 44345.0], [56.5, 44345.0], [56.6, 44345.0], [56.7, 44345.0], [56.8, 44345.0], [56.9, 44345.0], [57.0, 44546.0], [57.1, 44546.0], [57.2, 44546.0], [57.3, 44546.0], [57.4, 44546.0], [57.5, 44546.0], [57.6, 44546.0], [57.7, 44546.0], [57.8, 44546.0], [57.9, 44546.0], [58.0, 45394.0], [58.1, 45394.0], [58.2, 45394.0], [58.3, 45394.0], [58.4, 45394.0], [58.5, 45394.0], [58.6, 45394.0], [58.7, 45394.0], [58.8, 45394.0], [58.9, 45394.0], [59.0, 46042.0], [59.1, 46042.0], [59.2, 46042.0], [59.3, 46042.0], [59.4, 46042.0], [59.5, 46042.0], [59.6, 46042.0], [59.7, 46042.0], [59.8, 46042.0], [59.9, 46042.0], [60.0, 46141.0], [60.1, 46141.0], [60.2, 46141.0], [60.3, 46141.0], [60.4, 46141.0], [60.5, 46141.0], [60.6, 46141.0], [60.7, 46141.0], [60.8, 46141.0], [60.9, 46141.0], [61.0, 46479.0], [61.1, 46479.0], [61.2, 46479.0], [61.3, 46479.0], [61.4, 46479.0], [61.5, 46479.0], [61.6, 46479.0], [61.7, 46479.0], [61.8, 46479.0], [61.9, 46479.0], [62.0, 47895.0], [62.1, 47895.0], [62.2, 47895.0], [62.3, 47895.0], [62.4, 47895.0], [62.5, 47895.0], [62.6, 47895.0], [62.7, 47895.0], [62.8, 47895.0], [62.9, 47895.0], [63.0, 48590.0], [63.1, 48590.0], [63.2, 48590.0], [63.3, 48590.0], [63.4, 48590.0], [63.5, 48590.0], [63.6, 48590.0], [63.7, 48590.0], [63.8, 48590.0], [63.9, 48590.0], [64.0, 48754.0], [64.1, 48754.0], [64.2, 48754.0], [64.3, 48754.0], [64.4, 48754.0], [64.5, 48754.0], [64.6, 48754.0], [64.7, 48754.0], [64.8, 48754.0], [64.9, 48754.0], [65.0, 49470.0], [65.1, 49470.0], [65.2, 49470.0], [65.3, 49470.0], [65.4, 49470.0], [65.5, 49470.0], [65.6, 49470.0], [65.7, 49470.0], [65.8, 49470.0], [65.9, 49470.0], [66.0, 49909.0], [66.1, 49909.0], [66.2, 49909.0], [66.3, 49909.0], [66.4, 49909.0], [66.5, 49909.0], [66.6, 49909.0], [66.7, 49909.0], [66.8, 49909.0], [66.9, 49909.0], [67.0, 50016.0], [67.1, 50016.0], [67.2, 50016.0], [67.3, 50016.0], [67.4, 50016.0], [67.5, 50016.0], [67.6, 50016.0], [67.7, 50016.0], [67.8, 50016.0], [67.9, 50016.0], [68.0, 50252.0], [68.1, 50252.0], [68.2, 50252.0], [68.3, 50252.0], [68.4, 50252.0], [68.5, 50252.0], [68.6, 50252.0], [68.7, 50252.0], [68.8, 50252.0], [68.9, 50252.0], [69.0, 50691.0], [69.1, 50691.0], [69.2, 50691.0], [69.3, 50691.0], [69.4, 50691.0], [69.5, 50691.0], [69.6, 50691.0], [69.7, 50691.0], [69.8, 50691.0], [69.9, 50691.0], [70.0, 51005.0], [70.1, 51005.0], [70.2, 51005.0], [70.3, 51005.0], [70.4, 51005.0], [70.5, 51005.0], [70.6, 51005.0], [70.7, 51005.0], [70.8, 51005.0], [70.9, 51005.0], [71.0, 53200.0], [71.1, 53200.0], [71.2, 53200.0], [71.3, 53200.0], [71.4, 53200.0], [71.5, 53200.0], [71.6, 53200.0], [71.7, 53200.0], [71.8, 53200.0], [71.9, 53200.0], [72.0, 53982.0], [72.1, 53982.0], [72.2, 53982.0], [72.3, 53982.0], [72.4, 53982.0], [72.5, 53982.0], [72.6, 53982.0], [72.7, 53982.0], [72.8, 53982.0], [72.9, 53982.0], [73.0, 54795.0], [73.1, 54795.0], [73.2, 54795.0], [73.3, 54795.0], [73.4, 54795.0], [73.5, 54795.0], [73.6, 54795.0], [73.7, 54795.0], [73.8, 54795.0], [73.9, 54795.0], [74.0, 54844.0], [74.1, 54844.0], [74.2, 54844.0], [74.3, 54844.0], [74.4, 54844.0], [74.5, 54844.0], [74.6, 54844.0], [74.7, 54844.0], [74.8, 54844.0], [74.9, 54844.0], [75.0, 56214.0], [75.1, 56214.0], [75.2, 56214.0], [75.3, 56214.0], [75.4, 56214.0], [75.5, 56214.0], [75.6, 56214.0], [75.7, 56214.0], [75.8, 56214.0], [75.9, 56214.0], [76.0, 56366.0], [76.1, 56366.0], [76.2, 56366.0], [76.3, 56366.0], [76.4, 56366.0], [76.5, 56366.0], [76.6, 56366.0], [76.7, 56366.0], [76.8, 56366.0], [76.9, 56366.0], [77.0, 57129.0], [77.1, 57129.0], [77.2, 57129.0], [77.3, 57129.0], [77.4, 57129.0], [77.5, 57129.0], [77.6, 57129.0], [77.7, 57129.0], [77.8, 57129.0], [77.9, 57129.0], [78.0, 57155.0], [78.1, 57155.0], [78.2, 57155.0], [78.3, 57155.0], [78.4, 57155.0], [78.5, 57155.0], [78.6, 57155.0], [78.7, 57155.0], [78.8, 57155.0], [78.9, 57155.0], [79.0, 57158.0], [79.1, 57158.0], [79.2, 57158.0], [79.3, 57158.0], [79.4, 57158.0], [79.5, 57158.0], [79.6, 57158.0], [79.7, 57158.0], [79.8, 57158.0], [79.9, 57158.0], [80.0, 57580.0], [80.1, 57580.0], [80.2, 57580.0], [80.3, 57580.0], [80.4, 57580.0], [80.5, 57580.0], [80.6, 57580.0], [80.7, 57580.0], [80.8, 57580.0], [80.9, 57580.0], [81.0, 59044.0], [81.1, 59044.0], [81.2, 59044.0], [81.3, 59044.0], [81.4, 59044.0], [81.5, 59044.0], [81.6, 59044.0], [81.7, 59044.0], [81.8, 59044.0], [81.9, 59044.0], [82.0, 59324.0], [82.1, 59324.0], [82.2, 59324.0], [82.3, 59324.0], [82.4, 59324.0], [82.5, 59324.0], [82.6, 59324.0], [82.7, 59324.0], [82.8, 59324.0], [82.9, 59324.0], [83.0, 61820.0], [83.1, 61820.0], [83.2, 61820.0], [83.3, 61820.0], [83.4, 61820.0], [83.5, 61820.0], [83.6, 61820.0], [83.7, 61820.0], [83.8, 61820.0], [83.9, 61820.0], [84.0, 62008.0], [84.1, 62008.0], [84.2, 62008.0], [84.3, 62008.0], [84.4, 62008.0], [84.5, 62008.0], [84.6, 62008.0], [84.7, 62008.0], [84.8, 62008.0], [84.9, 62008.0], [85.0, 62580.0], [85.1, 62580.0], [85.2, 62580.0], [85.3, 62580.0], [85.4, 62580.0], [85.5, 62580.0], [85.6, 62580.0], [85.7, 62580.0], [85.8, 62580.0], [85.9, 62580.0], [86.0, 63081.0], [86.1, 63081.0], [86.2, 63081.0], [86.3, 63081.0], [86.4, 63081.0], [86.5, 63081.0], [86.6, 63081.0], [86.7, 63081.0], [86.8, 63081.0], [86.9, 63081.0], [87.0, 63274.0], [87.1, 63274.0], [87.2, 63274.0], [87.3, 63274.0], [87.4, 63274.0], [87.5, 63274.0], [87.6, 63274.0], [87.7, 63274.0], [87.8, 63274.0], [87.9, 63274.0], [88.0, 63417.0], [88.1, 63417.0], [88.2, 63417.0], [88.3, 63417.0], [88.4, 63417.0], [88.5, 63417.0], [88.6, 63417.0], [88.7, 63417.0], [88.8, 63417.0], [88.9, 63417.0], [89.0, 63580.0], [89.1, 63580.0], [89.2, 63580.0], [89.3, 63580.0], [89.4, 63580.0], [89.5, 63580.0], [89.6, 63580.0], [89.7, 63580.0], [89.8, 63580.0], [89.9, 63580.0], [90.0, 63597.0], [90.1, 63597.0], [90.2, 63597.0], [90.3, 63597.0], [90.4, 63597.0], [90.5, 63597.0], [90.6, 63597.0], [90.7, 63597.0], [90.8, 63597.0], [90.9, 63597.0], [91.0, 64662.0], [91.1, 64662.0], [91.2, 64662.0], [91.3, 64662.0], [91.4, 64662.0], [91.5, 64662.0], [91.6, 64662.0], [91.7, 64662.0], [91.8, 64662.0], [91.9, 64662.0], [92.0, 64827.0], [92.1, 64827.0], [92.2, 64827.0], [92.3, 64827.0], [92.4, 64827.0], [92.5, 64827.0], [92.6, 64827.0], [92.7, 64827.0], [92.8, 64827.0], [92.9, 64827.0], [93.0, 65811.0], [93.1, 65811.0], [93.2, 65811.0], [93.3, 65811.0], [93.4, 65811.0], [93.5, 65811.0], [93.6, 65811.0], [93.7, 65811.0], [93.8, 65811.0], [93.9, 65811.0], [94.0, 66315.0], [94.1, 66315.0], [94.2, 66315.0], [94.3, 66315.0], [94.4, 66315.0], [94.5, 66315.0], [94.6, 66315.0], [94.7, 66315.0], [94.8, 66315.0], [94.9, 66315.0], [95.0, 66431.0], [95.1, 66431.0], [95.2, 66431.0], [95.3, 66431.0], [95.4, 66431.0], [95.5, 66431.0], [95.6, 66431.0], [95.7, 66431.0], [95.8, 66431.0], [95.9, 66431.0], [96.0, 66738.0], [96.1, 66738.0], [96.2, 66738.0], [96.3, 66738.0], [96.4, 66738.0], [96.5, 66738.0], [96.6, 66738.0], [96.7, 66738.0], [96.8, 66738.0], [96.9, 66738.0], [97.0, 66833.0], [97.1, 66833.0], [97.2, 66833.0], [97.3, 66833.0], [97.4, 66833.0], [97.5, 66833.0], [97.6, 66833.0], [97.7, 66833.0], [97.8, 66833.0], [97.9, 66833.0], [98.0, 66842.0], [98.1, 66842.0], [98.2, 66842.0], [98.3, 66842.0], [98.4, 66842.0], [98.5, 66842.0], [98.6, 66842.0], [98.7, 66842.0], [98.8, 66842.0], [98.9, 66842.0], [99.0, 67055.0], [99.1, 67055.0], [99.2, 67055.0], [99.3, 67055.0], [99.4, 67055.0], [99.5, 67055.0], [99.6, 67055.0], [99.7, 67055.0], [99.8, 67055.0], [99.9, 67055.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 6300.0, "maxY": 3.0, "series": [{"data": [[66300.0, 1.0], [66700.0, 1.0], [6300.0, 1.0], [6400.0, 1.0], [6700.0, 1.0], [7000.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7600.0, 1.0], [7900.0, 1.0], [13000.0, 1.0], [13600.0, 1.0], [13900.0, 1.0], [14100.0, 2.0], [14400.0, 1.0], [14800.0, 1.0], [14900.0, 2.0], [15400.0, 1.0], [18600.0, 1.0], [20800.0, 1.0], [21100.0, 1.0], [21700.0, 1.0], [22100.0, 1.0], [22200.0, 1.0], [22500.0, 1.0], [23100.0, 2.0], [23700.0, 1.0], [26900.0, 1.0], [27400.0, 1.0], [28500.0, 1.0], [29100.0, 1.0], [29200.0, 1.0], [29500.0, 2.0], [30700.0, 1.0], [30900.0, 1.0], [31500.0, 1.0], [33400.0, 1.0], [33700.0, 1.0], [35200.0, 1.0], [35300.0, 1.0], [35400.0, 1.0], [37100.0, 1.0], [37300.0, 1.0], [37800.0, 1.0], [39200.0, 1.0], [39400.0, 2.0], [40100.0, 1.0], [42200.0, 1.0], [42300.0, 2.0], [43500.0, 1.0], [44300.0, 1.0], [44500.0, 1.0], [45300.0, 1.0], [46000.0, 1.0], [46100.0, 1.0], [46400.0, 1.0], [47800.0, 1.0], [48500.0, 1.0], [48700.0, 1.0], [49400.0, 1.0], [49900.0, 1.0], [50000.0, 1.0], [50200.0, 1.0], [50600.0, 1.0], [51000.0, 1.0], [53200.0, 1.0], [53900.0, 1.0], [54700.0, 1.0], [54800.0, 1.0], [56200.0, 1.0], [56300.0, 1.0], [57100.0, 3.0], [57500.0, 1.0], [59000.0, 1.0], [59300.0, 1.0], [61800.0, 1.0], [62000.0, 1.0], [62500.0, 1.0], [63000.0, 1.0], [63200.0, 1.0], [63400.0, 1.0], [63500.0, 2.0], [64600.0, 1.0], [64800.0, 1.0], [65800.0, 1.0], [66400.0, 1.0], [66800.0, 2.0], [67000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 67000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 27.51851851851852, "minX": 1.66836024E12, "maxY": 77.5, "series": [{"data": [[1.66836024E12, 77.5], [1.6683603E12, 27.51851851851852]], "isOverall": false, "label": "client-to-gateway-non-caching", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683603E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 6396.0, "minX": 1.0, "maxY": 67055.0, "series": [{"data": [[3.0, 66837.5], [4.0, 66738.0], [5.0, 66431.0], [6.0, 66315.0], [7.0, 65811.0], [8.0, 64827.0], [9.0, 64662.0], [10.0, 63597.0], [11.0, 63580.0], [12.0, 63417.0], [13.0, 63274.0], [14.0, 63081.0], [15.0, 62580.0], [16.0, 62008.0], [17.0, 61820.0], [18.0, 59324.0], [19.0, 59044.0], [20.0, 57580.0], [21.0, 57158.0], [22.0, 57155.0], [23.0, 57129.0], [24.0, 56366.0], [25.0, 56214.0], [26.0, 54844.0], [27.0, 54795.0], [28.0, 53982.0], [29.0, 53200.0], [30.0, 51005.0], [31.0, 50691.0], [33.0, 50016.0], [32.0, 50252.0], [35.0, 49470.0], [34.0, 49909.0], [37.0, 48590.0], [36.0, 48754.0], [39.0, 46479.0], [38.0, 47895.0], [41.0, 46042.0], [40.0, 46141.0], [43.0, 44546.0], [42.0, 45394.0], [45.0, 43540.0], [44.0, 44345.0], [47.0, 42309.0], [46.0, 42391.0], [49.0, 40195.0], [48.0, 42275.0], [51.0, 39429.0], [50.0, 39434.0], [53.0, 37840.0], [52.0, 39299.0], [55.0, 37126.0], [54.0, 37303.0], [57.0, 35343.0], [56.0, 35485.0], [59.0, 33755.0], [58.0, 35209.0], [61.0, 31506.0], [60.0, 33435.0], [63.0, 30782.0], [62.0, 30954.0], [67.0, 29109.0], [66.0, 29265.0], [65.0, 29513.0], [64.0, 29520.0], [71.0, 23760.0], [70.0, 26906.0], [69.0, 27475.0], [68.0, 28596.0], [75.0, 22238.0], [74.0, 22508.0], [73.0, 23150.0], [72.0, 23184.0], [79.0, 20857.0], [78.0, 21170.0], [77.0, 21751.0], [76.0, 22105.0], [83.0, 14967.0], [82.0, 14981.0], [81.0, 15436.0], [80.0, 18628.0], [87.0, 14127.0], [86.0, 14144.0], [85.0, 14402.0], [84.0, 14847.0], [91.0, 7916.0], [90.0, 13057.0], [89.0, 13691.0], [88.0, 13986.0], [95.0, 7303.0], [94.0, 7416.0], [93.0, 7520.0], [92.0, 7657.0], [99.0, 6400.0], [98.0, 6755.0], [97.0, 7091.0], [96.0, 7291.0], [100.0, 6396.0], [1.0, 67055.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.51, 38379.18999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 98.13333333333334, "minX": 1.66836024E12, "maxY": 1.020377405E7, "series": [{"data": [[1.66836024E12, 8692053.883333333], [1.6683603E12, 1.020377405E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66836024E12, 98.13333333333334], [1.6683603E12, 115.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683603E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 20406.804347826088, "minX": 1.66836024E12, "maxY": 53689.0, "series": [{"data": [[1.66836024E12, 20406.804347826088], [1.6683603E12, 53689.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683603E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 17981.021739130432, "minX": 1.66836024E12, "maxY": 51294.79629629629, "series": [{"data": [[1.66836024E12, 17981.021739130432], [1.6683603E12, 51294.79629629629]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683603E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 37.43478260869564, "minX": 1.66836024E12, "maxY": 48.37037037037038, "series": [{"data": [[1.66836024E12, 37.43478260869564], [1.6683603E12, 48.37037037037038]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683603E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 6396.0, "minX": 1.66836024E12, "maxY": 67055.0, "series": [{"data": [[1.66836024E12, 37126.0], [1.6683603E12, 67055.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66836024E12, 34191.200000000004], [1.6683603E12, 66373.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66836024E12, 37126.0], [1.6683603E12, 67055.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66836024E12, 35435.3], [1.6683603E12, 66835.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66836024E12, 6396.0], [1.6683603E12, 37303.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66836024E12, 21460.5], [1.6683603E12, 54388.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683603E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14273.0, "minX": 1.0, "maxY": 57129.0, "series": [{"data": [[4.0, 14273.0], [1.0, 40195.0], [2.0, 41092.5], [5.0, 57129.0], [6.0, 37115.5], [3.0, 40854.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 12399.0, "minX": 1.0, "maxY": 54052.0, "series": [{"data": [[4.0, 12399.0], [1.0, 37780.0], [2.0, 37922.5], [5.0, 54052.0], [6.0, 35055.0], [3.0, 38357.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.66836024E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.66836024E12, 1.6666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66836024E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.66836024E12, "maxY": 0.9, "series": [{"data": [[1.66836024E12, 0.7666666666666667], [1.6683603E12, 0.9]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6683603E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.66836024E12, "maxY": 0.9, "series": [{"data": [[1.66836024E12, 0.7666666666666667], [1.6683603E12, 0.9]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683603E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7666666666666667, "minX": 1.66836024E12, "maxY": 0.9, "series": [{"data": [[1.66836024E12, 0.7666666666666667], [1.6683603E12, 0.9]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6683603E12, "title": "Total Transactions Per Second"}},
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

