Search.setIndex({docnames:["10min","10min-cudf-cupy","api","dask-cudf","dask-xgb-10min","guide-to-udfs","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,nbsphinx:3,sphinx:56},filenames:["10min.ipynb","10min-cudf-cupy.ipynb","api.rst","dask-cudf.md","dask-xgb-10min.ipynb","guide-to-udfs.ipynb","index.rst"],objects:{"cudf.comm.gpuarrow":{GpuArrowReader:[2,0,1,""]},"cudf.comm.gpuarrow.GpuArrowReader":{to_dict:[2,1,1,""]},"cudf.core":{reshape:[2,2,0,"-"]},"cudf.core.column.categorical":{CategoricalAccessor:[2,0,1,""]},"cudf.core.column.categorical.CategoricalAccessor":{add_categories:[2,1,1,""],as_ordered:[2,1,1,""],as_unordered:[2,1,1,""],categories:[2,1,1,""],codes:[2,1,1,""],ordered:[2,1,1,""],remove_categories:[2,1,1,""],reorder_categories:[2,1,1,""],set_categories:[2,1,1,""]},"cudf.core.column.string":{StringMethods:[2,0,1,""]},"cudf.core.column.string.StringMethods":{byte_count:[2,1,1,""],capitalize:[2,1,1,""],cat:[2,1,1,""],center:[2,1,1,""],character_ngrams:[2,1,1,""],character_tokenize:[2,1,1,""],code_points:[2,1,1,""],contains:[2,1,1,""],count:[2,1,1,""],endswith:[2,1,1,""],extract:[2,1,1,""],find:[2,1,1,""],findall:[2,1,1,""],get:[2,1,1,""],htoi:[2,1,1,""],index:[2,1,1,""],insert:[2,1,1,""],ip2int:[2,1,1,""],isalnum:[2,1,1,""],isalpha:[2,1,1,""],isdecimal:[2,1,1,""],isdigit:[2,1,1,""],isempty:[2,1,1,""],isfloat:[2,1,1,""],ishex:[2,1,1,""],isinteger:[2,1,1,""],islower:[2,1,1,""],isnumeric:[2,1,1,""],isspace:[2,1,1,""],isupper:[2,1,1,""],join:[2,1,1,""],len:[2,1,1,""],ljust:[2,1,1,""],lower:[2,1,1,""],lstrip:[2,1,1,""],match:[2,1,1,""],ngrams:[2,1,1,""],ngrams_tokenize:[2,1,1,""],normalize_spaces:[2,1,1,""],pad:[2,1,1,""],partition:[2,1,1,""],replace:[2,1,1,""],replace_tokens:[2,1,1,""],replace_with_backrefs:[2,1,1,""],rfind:[2,1,1,""],rindex:[2,1,1,""],rjust:[2,1,1,""],rpartition:[2,1,1,""],rsplit:[2,1,1,""],rstrip:[2,1,1,""],slice:[2,1,1,""],slice_from:[2,1,1,""],slice_replace:[2,1,1,""],split:[2,1,1,""],startswith:[2,1,1,""],strip:[2,1,1,""],swapcase:[2,1,1,""],title:[2,1,1,""],token_count:[2,1,1,""],tokenize:[2,1,1,""],translate:[2,1,1,""],upper:[2,1,1,""],url_decode:[2,1,1,""],url_encode:[2,1,1,""],wrap:[2,1,1,""],zfill:[2,1,1,""]},"cudf.core.dataframe":{DataFrame:[2,0,1,""]},"cudf.core.dataframe.DataFrame":{"var":[2,1,1,""],T:[2,1,1,""],add:[2,1,1,""],add_column:[2,1,1,""],all:[2,1,1,""],any:[2,1,1,""],apply_chunks:[2,1,1,""],apply_rows:[2,1,1,""],argsort:[2,1,1,""],as_gpu_matrix:[2,1,1,""],as_matrix:[2,1,1,""],assign:[2,1,1,""],astype:[2,1,1,""],at:[2,1,1,""],columns:[2,1,1,""],copy:[2,1,1,""],corr:[2,1,1,""],count:[2,1,1,""],cov:[2,1,1,""],cummax:[2,1,1,""],cummin:[2,1,1,""],cumprod:[2,1,1,""],cumsum:[2,1,1,""],describe:[2,1,1,""],div:[2,1,1,""],drop:[2,1,1,""],drop_column:[2,1,1,""],drop_duplicates:[2,1,1,""],dtypes:[2,1,1,""],empty:[2,1,1,""],equals:[2,1,1,""],fillna:[2,1,1,""],floordiv:[2,1,1,""],from_arrow:[2,1,1,""],from_gpu_matrix:[2,1,1,""],from_pandas:[2,1,1,""],from_records:[2,1,1,""],groupby:[2,1,1,""],hash_columns:[2,1,1,""],head:[2,1,1,""],iat:[2,1,1,""],iloc:[2,1,1,""],index:[2,1,1,""],info:[2,1,1,""],insert:[2,1,1,""],isin:[2,1,1,""],iteritems:[2,1,1,""],join:[2,1,1,""],kurt:[2,1,1,""],kurtosis:[2,1,1,""],label_encoding:[2,1,1,""],loc:[2,1,1,""],max:[2,1,1,""],mean:[2,1,1,""],melt:[2,1,1,""],memory_usage:[2,1,1,""],merge:[2,1,1,""],min:[2,1,1,""],mod:[2,1,1,""],mul:[2,1,1,""],nans_to_nulls:[2,1,1,""],ndim:[2,1,1,""],nlargest:[2,1,1,""],nsmallest:[2,1,1,""],one_hot_encoding:[2,1,1,""],partition_by_hash:[2,1,1,""],pop:[2,1,1,""],pow:[2,1,1,""],prod:[2,1,1,""],product:[2,1,1,""],quantile:[2,1,1,""],quantiles:[2,1,1,""],query:[2,1,1,""],radd:[2,1,1,""],rdiv:[2,1,1,""],reindex:[2,1,1,""],rename:[2,1,1,""],replace:[2,1,1,""],reset_index:[2,1,1,""],rfloordiv:[2,1,1,""],rmod:[2,1,1,""],rmul:[2,1,1,""],rolling:[2,1,1,""],rpow:[2,1,1,""],rsub:[2,1,1,""],rtruediv:[2,1,1,""],select_dtypes:[2,1,1,""],set_index:[2,1,1,""],shape:[2,1,1,""],skew:[2,1,1,""],sort_index:[2,1,1,""],sort_values:[2,1,1,""],stack:[2,1,1,""],std:[2,1,1,""],sub:[2,1,1,""],sum:[2,1,1,""],tail:[2,1,1,""],take:[2,1,1,""],to_arrow:[2,1,1,""],to_csv:[2,1,1,""],to_dlpack:[2,1,1,""],to_feather:[2,1,1,""],to_gpu_matrix:[2,1,1,""],to_hdf:[2,1,1,""],to_json:[2,1,1,""],to_orc:[2,1,1,""],to_pandas:[2,1,1,""],to_parquet:[2,1,1,""],to_records:[2,1,1,""],to_string:[2,1,1,""],transpose:[2,1,1,""],truediv:[2,1,1,""],values:[2,1,1,""]},"cudf.core.groupby.groupby":{GroupBy:[2,0,1,""]},"cudf.core.groupby.groupby.GroupBy":{agg:[2,1,1,""],aggregate:[2,1,1,""],apply:[2,1,1,""],apply_grouped:[2,1,1,""],nth:[2,1,1,""],nunique:[2,1,1,""],rolling:[2,1,1,""],size:[2,1,1,""]},"cudf.core.index":{CategoricalIndex:[2,0,1,""],DatetimeIndex:[2,0,1,""],Float32Index:[2,0,1,""],Float64Index:[2,0,1,""],GenericIndex:[2,0,1,""],Index:[2,0,1,""],Int16Index:[2,0,1,""],Int32Index:[2,0,1,""],Int64Index:[2,0,1,""],Int8Index:[2,0,1,""],RangeIndex:[2,0,1,""],StringIndex:[2,0,1,""],UInt16Index:[2,0,1,""],UInt32Index:[2,0,1,""],UInt64Index:[2,0,1,""],UInt8Index:[2,0,1,""]},"cudf.core.index.CategoricalIndex":{categories:[2,1,1,""],codes:[2,1,1,""]},"cudf.core.index.DatetimeIndex":{to_pandas:[2,1,1,""]},"cudf.core.index.GenericIndex":{copy:[2,1,1,""],dtype:[2,1,1,""],find_label_range:[2,1,1,""],get_slice_bound:[2,1,1,""],is_monotonic:[2,1,1,""],is_monotonic_decreasing:[2,1,1,""],is_monotonic_increasing:[2,1,1,""],is_unique:[2,1,1,""],to_frame:[2,1,1,""]},"cudf.core.index.Index":{any:[2,1,1,""],argsort:[2,1,1,""],astype:[2,1,1,""],dropna:[2,1,1,""],equals:[2,1,1,""],from_pandas:[2,1,1,""],get_level_values:[2,1,1,""],get_slice_bound:[2,1,1,""],gpu_values:[2,1,1,""],is_unique:[2,1,1,""],isin:[2,1,1,""],join:[2,1,1,""],max:[2,1,1,""],memory_usage:[2,1,1,""],min:[2,1,1,""],name:[2,1,1,""],names:[2,1,1,""],ndim:[2,1,1,""],rename:[2,1,1,""],sum:[2,1,1,""],take:[2,1,1,""],to_array:[2,1,1,""],to_arrow:[2,1,1,""],to_dlpack:[2,1,1,""],to_pandas:[2,1,1,""],to_series:[2,1,1,""],unique:[2,1,1,""],values:[2,1,1,""],where:[2,1,1,""]},"cudf.core.index.RangeIndex":{copy:[2,1,1,""],dtype:[2,1,1,""],equals:[2,1,1,""],find_label_range:[2,1,1,""],get_slice_bound:[2,1,1,""],is_contiguous:[2,1,1,""],is_monotonic_decreasing:[2,1,1,""],is_monotonic_increasing:[2,1,1,""],is_unique:[2,1,1,""],memory_usage:[2,1,1,""],name:[2,1,1,""],size:[2,1,1,""],start:[2,1,1,""],stop:[2,1,1,""],to_frame:[2,1,1,""],to_gpu_array:[2,1,1,""],to_pandas:[2,1,1,""],unique:[2,1,1,""]},"cudf.core.index.StringIndex":{str:[2,1,1,""],take:[2,1,1,""],to_pandas:[2,1,1,""]},"cudf.core.reshape":{concat:[2,3,1,""],get_dummies:[2,3,1,""],melt:[2,3,1,""],merge_sorted:[2,3,1,""]},"cudf.core.series":{Series:[2,0,1,""]},"cudf.core.series.Series":{"var":[2,1,1,""],abs:[2,1,1,""],add:[2,1,1,""],all:[2,1,1,""],any:[2,1,1,""],append:[2,1,1,""],applymap:[2,1,1,""],argsort:[2,1,1,""],as_index:[2,1,1,""],as_mask:[2,1,1,""],astype:[2,1,1,""],cat:[2,1,1,""],ceil:[2,1,1,""],copy:[2,1,1,""],corr:[2,1,1,""],count:[2,1,1,""],cov:[2,1,1,""],cummax:[2,1,1,""],cummin:[2,1,1,""],cumprod:[2,1,1,""],cumsum:[2,1,1,""],data:[2,1,1,""],describe:[2,1,1,""],diff:[2,1,1,""],digitize:[2,1,1,""],drop_duplicates:[2,1,1,""],dropna:[2,1,1,""],dt:[2,1,1,""],dtype:[2,1,1,""],empty:[2,1,1,""],eq:[2,1,1,""],equals:[2,1,1,""],factorize:[2,1,1,""],fillna:[2,1,1,""],floor:[2,1,1,""],floordiv:[2,1,1,""],from_arrow:[2,1,1,""],from_categorical:[2,1,1,""],from_masked_array:[2,1,1,""],from_pandas:[2,1,1,""],ge:[2,1,1,""],groupby:[2,1,1,""],gt:[2,1,1,""],has_nulls:[2,1,1,""],hash_encode:[2,1,1,""],hash_values:[2,1,1,""],head:[2,1,1,""],iloc:[2,1,1,""],index:[2,1,1,""],is_monotonic:[2,1,1,""],is_monotonic_decreasing:[2,1,1,""],is_monotonic_increasing:[2,1,1,""],is_unique:[2,1,1,""],isin:[2,1,1,""],kurt:[2,1,1,""],kurtosis:[2,1,1,""],label_encoding:[2,1,1,""],le:[2,1,1,""],loc:[2,1,1,""],lt:[2,1,1,""],max:[2,1,1,""],mean:[2,1,1,""],median:[2,1,1,""],memory_usage:[2,1,1,""],min:[2,1,1,""],mod:[2,1,1,""],mul:[2,1,1,""],name:[2,1,1,""],nans_to_nulls:[2,1,1,""],ndim:[2,1,1,""],ne:[2,1,1,""],nlargest:[2,1,1,""],nsmallest:[2,1,1,""],null_count:[2,1,1,""],nullable:[2,1,1,""],nullmask:[2,1,1,""],nunique:[2,1,1,""],one_hot_encoding:[2,1,1,""],pow:[2,1,1,""],prod:[2,1,1,""],product:[2,1,1,""],quantile:[2,1,1,""],radd:[2,1,1,""],reindex:[2,1,1,""],rename:[2,1,1,""],replace:[2,1,1,""],reset_index:[2,1,1,""],reverse:[2,1,1,""],rfloordiv:[2,1,1,""],rmod:[2,1,1,""],rmul:[2,1,1,""],rolling:[2,1,1,""],round:[2,1,1,""],rpow:[2,1,1,""],rsub:[2,1,1,""],rtruediv:[2,1,1,""],scale:[2,1,1,""],set_index:[2,1,1,""],set_mask:[2,1,1,""],shape:[2,1,1,""],skew:[2,1,1,""],sort_index:[2,1,1,""],sort_values:[2,1,1,""],std:[2,1,1,""],str:[2,1,1,""],sub:[2,1,1,""],sum:[2,1,1,""],tail:[2,1,1,""],take:[2,1,1,""],to_array:[2,1,1,""],to_arrow:[2,1,1,""],to_dlpack:[2,1,1,""],to_frame:[2,1,1,""],to_gpu_array:[2,1,1,""],to_hdf:[2,1,1,""],to_json:[2,1,1,""],to_pandas:[2,1,1,""],to_string:[2,1,1,""],tolist:[2,1,1,""],truediv:[2,1,1,""],unique:[2,1,1,""],valid_count:[2,1,1,""],value_counts:[2,1,1,""],values:[2,1,1,""],values_host:[2,1,1,""],values_to_string:[2,1,1,""]},"cudf.io":{avro:[2,2,0,"-"],csv:[2,2,0,"-"],dlpack:[2,2,0,"-"],feather:[2,2,0,"-"],hdf:[2,2,0,"-"],json:[2,2,0,"-"],orc:[2,2,0,"-"],parquet:[2,2,0,"-"]},"cudf.io.avro":{read_avro:[2,3,1,""]},"cudf.io.csv":{read_csv:[2,3,1,""],to_csv:[2,3,1,""]},"cudf.io.dlpack":{from_dlpack:[2,3,1,""],to_dlpack:[2,3,1,""]},"cudf.io.feather":{read_feather:[2,3,1,""],to_feather:[2,3,1,""]},"cudf.io.hdf":{read_hdf:[2,3,1,""],to_hdf:[2,3,1,""]},"cudf.io.json":{read_json:[2,3,1,""],to_json:[2,3,1,""]},"cudf.io.orc":{read_orc:[2,3,1,""],read_orc_metadata:[2,3,1,""],to_orc:[2,3,1,""]},"cudf.io.parquet":{merge_parquet_filemetadata:[2,3,1,""],read_parquet:[2,3,1,""],read_parquet_metadata:[2,3,1,""],to_parquet:[2,3,1,""],write_to_dataset:[2,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:function"},terms:{"0123456789_":2,"01_23456789":2,"01t09":2,"07t12":2,"08t00":2,"0x2d3":2,"0x7f5e769499f0":2,"0x7f67007e07c0":2,"0x7fba966ab910":1,"0x7fcaa6f53440":2,"110mib":0,"123def":2,"13t12":2,"14t12":2,"15109mib":0,"15t18":2,"1a2":2,"20f":2,"25th":2,"26w":0,"27w":0,"2c6":2,"2fb":2,"2fd":2,"2fmedium":2,"2frapid":2,"2fstart":2,"34c":0,"35c":0,"38c":0,"41c":0,"42c":0,"50th":2,"633mib":0,"70w":0,"743mib":0,"75th":2,"99mib":0,"9bb5c8a87fdfc7be52f8be0d02f5d274":0,"\u00e9ee":2,"\u2155":2,"boolean":[2,5],"byte":2,"case":[1,2,5],"char":2,"class":[2,3],"default":[0,2,5],"final":[4,5],"float":[0,2,5],"function":[0,1,2,4,6],"import":[0,1,2,5,6],"int":[2,5],"long":2,"new":[0,2,3,4,5],"null":[0,2,6],"return":[0,1,2,4,5],"short":0,"switch":[2,4],"throw":2,"true":[0,2,3,5],"try":2,"var":[0,2],"while":[2,5],Age:2,And:2,Bus:0,For:[0,1,2,3,5],Its:2,Not:2,One:[1,2],That:5,The:[0,1,2,3,4,5],There:[1,5],These:[2,4,5],Use:[2,3,4,5],Used:2,Useful:2,Uses:2,Using:[0,2,4,5],Will:2,With:[0,1,2,3,5],___________rapid:2,_________hello:2,__cuda_array_interface__:[1,5],__fspath__:2,__index_level_0__:0,__name__:2,__setitem__:2,_at:2,_column:[2,5],_name:0,_path:2,_sparse_constructor:1,_time:2,a10:1,a11:1,a12:1,a13:1,a14:1,a15:1,a16:1,a17:1,a18:1,a19:1,a543:2,a_dari:5,a_mask:5,aab:2,aaba:[0,2],ab_cdefghij:2,abb:2,abc:2,abc_def:2,abcd:2,abcdef:2,abcdefghij:2,abcdefghij_:2,abdc:2,abl:[1,3],about:[0,1,2,5],abov:[1,2,3,5],abs:2,absolut:2,acceler:[0,5],accept:2,access:[0,2,5],accessor:[2,3,4],accommod:2,achiev:2,acquir:4,across:[0,1,3,5],action:2,activ:[0,4],actual:[0,5],adapt:[0,5],add:[0,2],add_categori:2,add_column:2,add_ten:0,added:[0,2],adding:[0,2],addit:[2,5],addition:[3,4],address:4,advanc:[1,3],advantag:1,advertis:3,after:[0,2,5],again:[1,2,5],against:2,agg:[0,2,3],agg_col1:0,agg_col2:0,aggreg:[0,2,3,4],ai_:2,algebra:1,algorithm:2,alia:2,alic:5,align:2,all:[0,2,3,4,5],allig:2,alloc:[2,5],allow:[0,2,5],along:2,alpha:2,alphabet:2,alphanumer:2,alreadi:[1,2,3],also:[0,1,2,5],alter:2,altern:[1,2],altogeth:2,alwai:2,ambigu:2,among:2,amount:2,analyz:0,angl:2,ani:[0,2,3,5],anim:2,anoth:[0,2],answer:5,ant:2,anyth:2,apach:0,apart:2,api:[0,1,4,5,6],apolog:3,appear:2,append:2,appli:[0,2,5],applic:2,apply_chunk:[2,5],apply_group:[2,5],apply_row:[2,5],applymap:[2,5],approach:5,approxim:2,arang:[0,2,5],arbitrari:2,architectur:5,arg1:[2,5],arg:2,argsort:2,argument:[1,2,5],arithmet:2,around:2,arr:[1,5],arr_cupi:1,arrai:[0,2,6],as_gpu_matrix:[1,2],as_index:[2,5],as_mask:2,as_matrix:[0,2],as_ord:2,as_unord:2,asarrai:[1,5],ascend:2,ascii:2,ascontiguousarrai:1,asfortranarrai:1,assign:[0,2,3,4,5],associ:[2,4],assum:[1,2],astyp:[0,2],ata:0,atleast:2,attempt:2,attribut:[0,2],auto:2,automat:[0,2,5],av453:2,avail:[0,2,4],averag:[2,5],avg:2,avoid:2,avro:2,awar:2,axc:2,axd:2,axes:2,axi:[0,1,2,4],baca:[0,2],back:[0,2],background:[0,5],balanc:4,bao:2,base:[0,2,5],baselin:0,basic:[0,2,5],bat:2,batch:2,baz:2,bcd:2,bear:2,becaus:[0,1,2,3,5],becom:1,bee:2,been:[2,3],befor:[0,1,2,4,5],beforehand:1,begin:[0,2],behavior:[0,2,5],being:[0,2,5],belong:2,below:[0,2,5],berg:2,best:[0,1,2],best_book:2,beta:2,better:2,between:[1,2,3,4],beyond:0,big:2,bigram:2,bin:[0,2],binari:2,bird:2,bit:2,bitmask:[2,5],blkct:2,blob:2,block:[2,5],blockdim:[2,5],blosc:2,blosclz:2,bob:5,book:2,bool:[2,5],bool_onli:2,boolean1:0,boost:4,booster:4,borrow:0,both:[2,3,5],bottom:2,bound:[2,5],boundari:5,box:5,break_long_word:2,break_on_hyphen:2,broader:5,brotli:2,bst:4,buf:2,buffer:2,build:[2,4,5],built:[0,1,2],builtin:2,by_index:2,bye:[0,2],byte1:0,byte_count:2,byte_rang:2,bytes1:0,bytesio:2,bz2:2,bzip2:2,caba:[0,2],cache_kei:2,caeen:2,cafe:2,calcul:[0,1,2],call:[0,2,4,5],callabl:2,caller:2,can:[0,1,2,3,4,5],cannot:2,cap:0,capit:2,captiv:2,captur:2,carefulli:5,carib:2,cast:2,cat:[0,2],categor:2,categori:[0,3,6],categoricalaccessor:2,categoricalindex:6,ceil:2,cell:[1,2,5],center:[2,5],certain:2,certainli:3,chainer:1,chameleon:2,chang:2,chani:0,charact:2,character_ngram:2,character_token:2,cheatsheet:0,check:[1,2],checksum:2,choic:[1,2],chunk:[2,5],chunksiz:2,circl:2,clarifi:2,classmethod:2,cleaner:4,cleanli:1,client:[0,4],close:2,cluster:[0,3,6],cmath:2,cmd:4,code:[0,2,5],code_point:2,coerc:1,cohes:3,col1:[2,5],col:[1,2],col_fil:2,col_level:2,cola_cupi:1,collaps:2,collect:0,column:[0,1,2,3,4,5],column_1:2,column_2:2,column_3:2,column_index:0,column_nam:2,columnar:0,columns_mapp:2,com:2,combin:[0,2],comfort:[0,5],comm:2,comma:2,command:4,comment:2,common:[2,5],commun:4,compar:2,compat:2,compil:[2,5],complet:0,complevel:2,complex:[2,5],complib:2,complic:5,compon:2,compos:5,comprehens:3,compress:2,compressor:2,comput:[0,2,3,5,6],concat:[2,4],concaten:[0,2,4],concept:0,concis:2,concurr:2,cond:2,conda:[1,5],condit:[0,2,5],condition:5,conditional_add:5,configur:[2,5],conflict:2,conform:2,conjunct:5,consecut:2,consequ:1,consid:2,consider:5,consist:5,constant:2,construct:4,constructor:[1,2],consum:[2,4],consumpt:2,contain:[0,2,4,5],contanin:2,content:[2,5,6],contigu:[1,2],continu:1,contract:0,contribut:2,control:[2,5],convent:2,convers:[1,2],convert:[2,3,6],convert_ax:2,convert_d:2,coordin:4,copi:2,core:[0,1,2,4,5],corr:2,correct:2,correl:2,correspond:[2,5],cos:2,cost:2,could:[1,2,5],count:[0,2,3],coupl:5,cov:2,covari:2,cover:5,cow:2,cpu:[0,1,3],creat:[0,1,2,3,5],creator:0,criteria:2,criterion:2,csc:1,csc_matrix:1,csr_matrix:1,csv:2,cube_funct:2,cuda:[0,1,2,4,5],cuda_array_interfac:5,cudapysupport:2,cudatoolkit:1,cudautil:5,cudf:2,cudf_compar:0,cudf_df:3,cudf_obj:2,cudf_to_cupy_sparse_matrix:1,cudf_val:2,cummax:2,cummin:2,cumprod:2,cumsum:2,cumul:2,cupi:[0,2,6],cupyx:1,current:[0,2,3,5],custom:[2,3,5],custom_udf:2,dai:[2,5],dame:2,dan:5,dashboard:[0,4],dask:6,dask_cuda:[0,4],dask_cudf:[0,3,4],dask_cudf_compar:0,dask_gdf:0,data:[1,2,3,4,5,6],data_column:2,databas:2,datafram:[0,3,4,6],dataframegroupbi:2,dataset:[2,5,6],date:[0,2,3],date_ddf:0,date_df:0,date_format:2,date_rang:0,date_unit:2,datelik:2,datetim:[0,2],datetime64:2,datetimeindex:6,datetimelik:2,dayfirst:2,dayofweek:3,ddb:2,ddf1:0,ddf2:0,ddf:[0,4],ddf_a:0,ddf_b:0,ddof:2,decent:3,decim:2,decimals_as_float:2,decod:[2,4],decompress:2,decor:2,decreas:2,deep:2,deepli:2,def:[0,1,2,5],def_xyz:2,default_handl:2,defin:[0,1,2,6],definit:2,degre:2,delai:0,delet:2,delim_whitespac:2,delimit:2,delta:2,demonstr:5,dens:[1,2],depend:[0,1,2],deprec:[1,4],depth:5,der:2,descend:2,describ:2,descript:[0,2],design:3,desir:[2,5],detail:[0,2,4],detect:2,determin:2,determinist:2,dev:2,dev_ari:2,develop:[1,5,6],deviat:[2,3],devic:2,device_array_lik:5,devicearrai:5,devicendarrai:[1,5],df1:0,df2:[0,5],df_a:[0,2],df_b:[0,2],df_info:2,df_merg:2,df_new:2,dgdf:0,diag_data:1,diagon:[1,2],dict:[2,5],dictionari:[2,5],did:5,diff:2,differ:[2,4,5],different_column_typ:2,difficult:[3,5],dig:2,digit:2,dimens:2,dimension:[1,2],direct:[0,2],directli:[0,1,2,5],directori:[0,2],disabl:[2,6],discard:2,discuss:0,disk:2,disp:0,displai:2,distribut:[0,4],div:2,divid:5,divis:2,divisor:2,dlpack:[1,2],dmlc:[2,4],doc:[1,2],document:[0,2,4,5],doe:[2,5],doesn:[0,2,5],dog:[0,2],doing:5,dollar:2,don:[1,2,3,5],done:[0,4],doneandnotdonefutur:0,doubl:2,double1:0,double_precis:2,doublequot:2,downstream:[0,1],downward:2,drawn:5,driver:[0,2],drop:2,drop_column:2,drop_dupl:2,drop_first:2,drop_whitespac:2,dropna:2,ds2:0,dtype:[0,1,2,5],due:[0,2,3,5],dummy_na:2,duplic:2,dure:[2,5],e501:2,each:[0,1,2,4,5],eagl:2,earlier:5,easi:[1,3],easiest:[1,5],eator:0,ecc:0,ecosystem:[1,5],edg:2,effect:[2,3],effici:2,efg:2,efgh:2,either:[0,1,2,5],element:[0,2,3],elementwis:2,ello:2,els:[0,2,5],emapl:2,empti:[2,5],empty_lik:5,emul:2,enabl:[2,4],enable_statist:2,encapsul:2,encod:[0,2,4],encourag:[1,3],end:[2,5],endswith:2,enforc:0,engin:2,enorm:1,enough:[0,2,3,5],ensur:[0,2,4],entir:[1,2,4,5],entri:2,enumer:[2,5],env:[0,1,4,5],environ:[1,4],envvar:1,epoch:2,epsilon:2,equal:2,equival:[0,2],error:[1,2,4],escap:2,estim:2,evalu:[0,2],even:[2,5],ever:5,everi:[0,2,5],everyth:2,exact:2,exactly_equ:2,exampl:[0,1,2,5],example_fil:0,example_func:5,example_output:0,except:[2,5],exclud:2,execut:[0,2,5],exist:[0,1,2],expand:2,expand_tab:2,expand_tabsbool:2,expect:[1,2,3,5],expens:3,explicitli:[0,1,2,5],explor:5,exponenti:2,expos:1,expr:2,express:2,extend:0,extens:2,extensiondtyp:2,extra:2,extract:2,fact:5,factor:2,failur:2,fairli:5,falcon:2,fals:[0,1,2,5],false_valu:2,fan:0,fashion:5,fast:[0,2,3],fastavro:2,faster:2,favorit:2,feather:2,featur:2,feel:5,few:5,fewer:2,fgh:2,field:[0,2],field_nam:0,file:[0,2],filemetadata_list:2,filenam:2,filepath_or_buff:2,filesystem:2,fill:[2,5],fill_valu:2,fillchar:2,fillna:[0,2,3],filter:[0,2],find:2,find_label_rang:2,findal:2,fine:2,finish:0,first:[0,2,5],fish:2,fisher:2,fit:0,five:2,fix:[2,3],flag:[1,2],fletcher32:2,flexibl:[0,1,2,5],float1:0,float32:2,float32index:6,float64:[2,5],float64index:6,float_col:2,float_valu:2,floor:2,floordiv:2,fly:2,fname:2,focu:1,focus:5,follow:[2,3,5],foo:[0,2],foo_dask:0,foral:[2,5],forc:[0,2],force_ascii:2,force_decimal_scal:2,forceindex:2,fork:4,form:[2,3],format:[0,1,2,3],fortran:[1,2],found:[1,2],fox:2,fraction:2,frame:2,free:5,freedom:2,freq:[0,2],frequenc:2,frequent:2,friend:2,from:[0,1,2,3,4,5],from_arrai:2,from_arrow:2,from_batch:2,from_categor:2,from_cudf:0,from_dask_datafram:4,from_dlpack:[1,2],from_gpu_matrix:[1,2],from_masked_arrai:2,from_panda:[0,2,3,4],from_record:2,from_tupl:0,fromdlpack:1,frustrat:3,ftp:2,full:[0,1,2,3],fulli:[0,2],func:[0,2],further:2,futur:0,fuz:2,g_col1:0,gamma:2,garbag:2,gather:2,gdf1:0,gdf2:0,gdf:[0,2],gdf_categori:2,gdf_col:1,gdf_string:2,gear:0,gener:[2,3],generic_paramet:4,genericindex:6,georg:[2,5],get:[1,2,5],get_dt_field:2,get_dummi:2,get_level_valu:2,get_slice_bound:2,getitem:2,getvalu:2,ghi:2,give:[1,2],given:2,global:[2,5],going:[1,5],golden:2,good:2,goodby:2,govern:2,gpu:[0,1,2,4,5,6],gpu_add:5,gpu_hist:4,gpu_kernel_mask:5,gpu_valu:2,gpuarrow:2,gpuarrowread:6,grab:5,grade:0,gram:2,graph:0,greater:2,grid:5,group9:2,group:[2,3,5],group_kei:2,group_seri:2,groupbi:[0,3,6],grouper:2,grow_polici:4,guarante:2,guard:5,guid:[2,5],gzip:2,had:0,half:2,hameleon:2,hand:2,handl:[2,6],handler:2,has:[0,2,3,4,5],has_nul:2,hash:[2,5],hash_column:2,hash_encod:2,hash_valu:2,hashabl:2,have:[0,1,2,4,5],hdf5:2,hdf:2,hdfstore:2,head:[0,1,2,5],header:2,heart:5,hello:2,help:5,helper:[1,2],henc:2,here:[1,2,5],hex:2,hhh:2,hierarch:[0,2],high:5,higher:2,highest:2,highli:2,highlight:5,hold:2,hood:0,hopefulli:5,host:2,hostnam:4,hot:2,hour:2,hous:2,how:[0,1,2,5],howev:[0,2],html:[1,2],htoi:2,http:[0,1,2,4],human:2,hundr:1,iat:2,id_var:2,ident:2,identifi:[2,5],idx:[0,2],ignor:[1,2,5],ignore_index:2,illustr:[1,5],iloc:[0,2],immut:2,implement:[0,2,3],implicitli:5,imposs:2,improv:2,in1:2,in2:2,in3:2,in_col:5,incas:2,includ:[0,2,4,5],inclus:2,incol:[2,5],inconsist:3,incorrect:2,increas:2,ind:2,independ:[2,5],index:[3,5,6],index_col:2,index_column:0,index_label:2,index_mapp:2,indic:[2,5],individu:2,ineffici:2,inf:2,infer:2,inferenc:4,influenc:2,info:2,inform:[0,1,2,5],ingest:3,initi:[0,6],inner:2,inplac:2,input:[1,2,5],insert:2,insid:2,inspir:2,instanc:[0,2,4,5],instanti:4,instead:[0,2,5],int16index:6,int1:0,int32:[0,2,5],int32index:6,int64:[0,1,2],int64arrai:2,int64index:6,int8:[0,2],int8index:6,int_col:2,int_valu:2,integ:[0,2],integr:2,intens:1,intent:2,interact:[0,5],interfac:[1,2,5],intern:2,interoper:1,interpol:2,interpret:2,interrog:2,intersect:2,interv:2,interweav:6,introduct:0,introductori:1,introspect:2,invalid:2,invok:2,involv:2,ip2int:2,ipaddr:4,is_contain:2,is_contigu:2,is_monoton:2,is_monotonic_decreas:2,is_monotonic_increas:2,is_th:2,is_uniqu:2,isalnum:2,isalpha:2,isdecim:2,isdigit:2,isempti:2,isfloat:2,isfortran:1,ishex:2,isin:[0,2],isinteg:2,islow:2,isn:1,isnumer:2,iso8601:2,iso:2,isspac:2,issu:[2,3],isupp:2,item:2,iter:2,iteritem:2,its:[0,2,4],itself:2,jit:[2,5],jite:5,john:2,join:[2,3],join_index:2,json:2,jsonread:2,jump:2,jun:0,just:[1,2,5],kaa:2,keep:2,keep_default_d:2,keep_default_na:2,keep_index:2,kei:[0,2],kernel:[2,6],keyword:[0,2,5],kind:[0,2],known:2,koala:2,kurt:2,kurtosi:2,kwarg1:2,kwarg2:2,kwarg:[2,5],label:[2,4],label_encod:2,lack:[2,5],lambda:[2,3],larg:[2,3],larger:0,largest:2,last:2,latenc:5,latest:1,launch:[2,4,5],lazi:0,lead:[1,2,3,5],least:2,leav:[2,4,5],left:[0,2,3],left_index:[2,3],left_on:2,leftmost:2,legaci:5,len:[0,2,5],length:[2,5],leopard:2,less:2,let:[1,5],letter:2,level:[0,2,5],level_nam:2,leverag:[1,4,5],lewi:2,lexicograph:2,lgamma:2,lhs:2,lib64:1,lib:[1,2,5],libcudf:2,libdevic:1,libdlpack:1,libgdf:2,libnvvm:1,librari:[1,2,3,5,6],lies:2,lightweight:4,like:[0,2,3,4,5],limit:[2,5],linalg:1,linda:2,line:[1,2,4],line_termin:2,linear:[1,2,3],linetermin:2,lion:2,list:[0,1,2,3,4,5],liter:2,ljust:2,load:[0,2,4],loc:[0,2,3,5],local:[0,1,2,5],local_dict:[0,2],localcudaclust:[0,4],localpath:2,locat:2,logic:[0,5],long1:0,longer:[2,4],look:[1,3,5],lookup:1,loop:[2,5],lossguid:4,lot:5,low:[2,5],lower:[0,2],lowercas:2,lowest:2,lstrip:2,lsuffix:2,luckili:1,lz4:2,lz4hc:2,lzo:2,machin:[0,3],made:2,mai:[0,1,2,4,5],main:2,mainli:0,maintain:0,major:[1,2],make:[0,1,2,5],maketran:2,mammal:2,manag:5,mangle_dupe_col:2,mani:[0,2,3,5],manipul:0,manner:2,manual:1,map:[0,2,5],map_partit:[0,3],mapper:2,mark:2,mask:[2,5],mask_get:5,match:[2,5],math:[2,5],mathemat:5,matric:1,matrix:[2,6],matter:[1,5],matur:1,mauddib:0,max:[0,2,3,5],max_col:2,max_depth:4,max_info_column:2,max_info_row:2,max_leav:4,max_spe:2,maximum:2,mean:[0,1,2,3,4,5],median:2,medium:2,melt:2,mem:5,memori:[0,1,2,4,5],memory_usag:2,mention:[3,5],merg:[0,2,3],merge_parquet_filemetadata:2,merge_sort:2,met:0,metad:0,metadat:0,metadata:[0,2],metadata_file_path:2,metadata_list:2,method:[1,2,3,5],metric:6,microsecond:2,middl:0,midpoint:2,might:[1,2],millisecond:2,mimic:2,min:2,min_count:2,min_period:[2,5],minimum:2,minu:2,minut:[2,6],mislead:3,miss:2,mix:2,mkdir:0,mod:2,mode:2,model:[0,6],modif:2,modifi:2,modul:[2,6],modulo:2,moment:0,monkei:2,monoton:2,monotonic_decreas:2,monotonic_increas:2,month:2,moo:2,more:[0,1,2,5],most:[0,2,3,5],mous:2,move:[1,2,5],msg:1,much:0,mul:2,mult:2,mult_add:2,multi:[0,2,4,5,6],multiindex:2,multipl:[0,1,2,3,5],multipli:5,multiply_by_5:5,music:2,must:[0,1,2,4,5],my_favorit:2,myla:2,n_gpu:4,na_filt:2,na_posit:2,na_rep:2,na_sentinel:2,na_valu:2,name:[0,2,4,5],nan:[2,5],nan_as_nul:2,nanosecond:2,nans_to_nul:2,nat:2,nativ:2,navig:6,nccl:6,nccl_p2p_disabl:4,ncol:2,ndarrai:[0,1,2,5],ndim:2,nearest:2,necessari:[0,5,6],necessarili:2,need:[0,1,2,5],neg:2,neither:2,nelem:[1,2],never:2,new_arr:1,new_categori:2,new_cudf_env:0,newer:3,newli:2,newlin:2,next:[0,1,2,5],ngram:2,ngrams_token:2,nlargest:2,node:4,non:2,none:[0,2,5],nonzero:1,noqa:2,nor:2,norm:1,normal:[1,2,4],normalize_spac:2,not_don:0,notabl:2,note:[0,2,4,5],notebook:1,noth:2,notic:[2,5],notimplementederror:2,now:[0,1,2,5],npart:2,npartit:[0,3,4],nrow:[0,2,5],nsmallest:2,nt64:0,nth:2,nto:2,null_count:2,nullabl:2,nullmask:[2,5],num1:2,num:[0,2],num_boost_round:4,num_round:4,num_row:2,num_row_group:2,numba:[1,2,6],numbapro:1,numbapro_libdevic:1,numbapro_nvvm:1,numbawarn:1,number:[0,2,4,5],numer:[2,5],numeric_onli:2,nump:0,numpi:[2,4,5],numpy_:0,numpy_typ:0,nuniqu:2,nvidia:0,nvvm:1,nwrap:2,oala:2,obj:2,object:[1,2,3,4,5],observ:[0,2],obtain:2,occasion:2,occur:[0,2],occurr:[0,2],off:[0,2,5],offer:5,offset:2,often:3,old:2,omit:2,onc:[0,2],one1:2,one:[0,1,2,4,5],one_hot_encod:2,ones:2,onli:[0,2,3,5,6],open:2,oper:[1,2,3,6],oppos:[0,2],opt:5,optim:[2,4],option:[2,4,5],orc:2,orchestr:3,order:[0,1,2],ordin:2,ordinari:2,org:[1,2],orient:2,origin:[2,3],other:[0,2,3,5],otherwis:[0,2],our:[0,1,5],out1:2,out2:2,out:[1,2,5],out_col:5,out_column_ind:2,out_dtyp:2,outcol:[2,5],outer:2,output:[1,2,3,4,5],output_dari:5,output_fram:2,outsid:[2,5],over:[2,4,5],overhead:2,overlap:2,overrid:2,overridden:2,overview:[1,6],overwit:2,own:[2,5],ownership:4,p2p:6,packag:[1,2,3,5],pad:2,page:6,pair:2,panda:[1,2,3,4],pandad:2,pandas_typ:0,pandas_v:0,paradigm:0,paragraph:2,parallel:[0,2,3,5],param:4,paramet:[2,6],parent:2,parquet:[2,3],parrot:2,pars:[0,2],parse_d:2,parser:2,part:2,particular:2,partit:[0,2],partition_by_hash:2,partition_col:2,pass:[0,1,2,4,5],past:[2,5],pat:2,path:[0,2],path_or_buf:2,pathlib:2,pattern:2,pd_result:2,pdf:[0,2,4],pdi:2,pds:2,pearson:2,per:[0,2,4],percentil:2,perf:0,perform:[1,2,4],period:[0,2],persist:[3,4,6],person:2,pessimist:5,pessimistic_nul:2,pet_cod:2,pet_dummi:2,pet_dummy_0:2,pet_dummy_1:2,pet_dummy_2:2,pet_own:2,pet_typ:2,pgali:0,pid:0,pipe:[2,4],pitt:2,place:2,plan:[2,5],pleas:[0,2,4,5],point:[2,5],pointer:2,pop:2,popen:4,popul:[1,5],portion:[0,5],posit:2,possibl:2,post:0,postfix:2,pow:2,power:2,practic:0,pre:[2,5],precis:2,precise_float:2,pred:4,predict:6,prefer:1,prefix:[1,2],prefix_sep:2,prepend:2,prescrib:2,present:2,preserv:2,preserve_index:2,previous:[1,5],price:5,primarili:2,print:[2,4],proce:[0,1],proceed:0,process:[0,1,2,4,5],prod:2,produc:[0,1,2,4],product:2,progress:0,project:3,promot:2,propag:2,proper:2,properti:[0,2],propog:5,protocol:2,provid:[0,1,2,5],ptx:2,punctuat:2,put:2,pwr:0,py3:2,pyarrow:[0,2],pycapsul:2,pycapsule_obj:[1,2],pydata:[2,5,6],pytabl:2,python3:[1,5],python:[0,2,4,5],quant_index:2,quantil:2,quantiti:2,queri:[0,2,3,4],question:5,quick:2,quickli:[1,2],quicksort:2,quinn:5,quot:2,quote_al:2,quote_minim:2,quote_non:2,quote_nonnumer:2,quotechar:2,rabbit:2,radd:2,rais:[1,2,3],rand:0,randint:[0,2,4],random:[0,1,2,6],random_strings_arrai:2,randomdata:5,randomli:0,rang:[0,1,2,5],rangeindex:6,rapid:[0,1,2,4,5],rather:2,raw:2,rdiv:2,reach:2,read:[0,2,5],read_avro:2,read_csv:[0,2,3],read_feath:2,read_hdf:2,read_json:2,read_orc:[0,2],read_orc_metadata:2,read_parquet:[0,2],read_parquet_metadata:2,readabl:2,reader:0,readi:5,real:2,recarrai:2,receiv:2,recent:2,recogn:2,recommend:[2,5],record:2,recordbatch:2,recov:2,rectangl:2,reduct:3,ref:2,refer:[1,4,6],reflect:2,reg:4,regardless:[1,2,3],regex:2,regular:2,reindex:2,rel:2,relat:2,relationship:2,relev:2,reli:0,remain:2,remaind:5,remot:2,remov:[2,5],remove_categori:2,renam:2,reorder:2,reorder_categori:2,repeat:2,repl:2,replac:[0,1,2],replace_token:2,replace_whitespac:2,replace_with_backref:2,report:3,repres:2,represent:2,request:2,requir:[2,4,5],res:1,resembl:2,reset:2,reset_index:2,reshap:[1,2],reshaped_arr:1,reshaped_df:1,resourc:2,respect:[1,2],rest:2,restor:0,result:[0,2,3,4,5],results_ddf:0,retriev:2,return_index:2,return_metadata:2,reus:3,revers:[0,2],rfind:2,rfloordiv:2,rhs:2,right:[2,3],right_index:[2,3],right_on:2,rightmost:2,rindex:2,river:2,rjust:2,rmm:5,rmod:2,rmse:6,rmul:2,roll:[2,3,6],rolling_avg:[2,5],rolling_avg_:5,rollinggroupbi:2,root:[2,4],root_dir:2,root_path:2,round:[2,4],row:[0,1,2,3,5],row_group:2,rowgroup:2,rpartit:2,rpow:2,rsplit:2,rstrip:2,rsub:2,rsuffix:2,rtruediv:2,run:[0,2,5],runtim:5,s_copi:2,s_type:0,s_version:0,sacrif:1,safe:[0,5],sai:5,same:[0,1,2,3,5],sampl:[0,2],sarah:5,satisfi:2,scalar:2,scale:[0,2,3],schedul:[0,4],schema:2,scientist:5,scipi:1,scope:[0,5],seamlessli:1,search:[2,6],search_dat:[0,2],search_date2:2,searchabl:2,second:[0,2],section:[0,2,5],see:[0,2,3,4,5],seed:[0,5],seek:2,select:[2,3],select_dtyp:2,self:2,send:2,sentenc:2,sep:2,separ:[2,5],seper:2,sequenc:2,sequenti:5,ser1:2,ser2:2,ser:[2,5],seri:[3,4,6],serial:2,serializ:2,seriesgroupbi:2,session:4,set:[0,2,4,5],set_categori:2,set_index:2,set_mask:2,setup:0,sever:5,shallow:2,shape:[1,2,5],share:[2,5],shark:2,short1:0,shorthand:2,should:[0,2,5],show:[0,2],shown:2,side:2,sign:2,similar:[2,3,5],simpl:[0,2,5],simpler:5,simpli:1,simultan:[2,5],sin:2,sinc:[2,5],singl:[0,1,2,3,4],sion:0,site:[1,5],size:[2,4,5],skew:2,skip:[2,5],skip_blank_lin:2,skip_row:2,skipfoot:2,skipinitialspac:2,skipna:2,skiprow:2,sleep:0,slice:[0,2],slice_from:2,slice_replac:2,sliceabl:2,slide:[2,5],slight:3,slightli:2,small:[1,3,5],smaller:2,smallest:2,smi:0,smooth:[0,6],snake:2,snappi:2,snippet:0,solut:3,some:[0,2,5],some_func:2,someth:[0,2],sometim:[0,1,5],sooner:0,sort:[0,2,3],sort_index:2,sort_remain:2,sort_valu:[0,2],sorted_obj:2,sought:2,sourc:2,space:2,span:2,spark:[0,4],spars:[2,6],sparse_data:1,sparseformat:1,special:2,specialis:2,specif:[0,2,4,5],specifi:[0,2,5],speed:[1,2],spent:0,split:[0,2,4],spread:[0,3,5],sql:[0,2],sqrt:[2,4,5],squar:4,squared_error:4,squarederror:4,squeez:2,stabl:1,stack:2,stai:2,standard:[0,2,3],star:0,start:[0,2,4,5],startswith:2,stat:2,statement:[0,5],statist:[0,2],statu:[0,4],std:[2,3],stdin:2,stdout:[2,4],step:[0,2],stock:5,stop:[0,2],storag:2,store:[0,1,2,5],str:[0,1,2,4,5],str_seri:2,str_wrap:2,streamlin:5,strict:2,stride:2,string1:0,string:[3,5,6],stringindex:[0,6],stringio:2,stringmethod:2,stringr:2,strings_to_categor:2,strip:2,stripe:2,stripe_count:2,strptime:[0,2],strtod:2,structur:[0,1,2,5],style:[0,2,5],sub:2,subdirectori:2,subject:2,subprocess:4,subscript:2,subset:[2,3],substitut:2,substr:2,subtract:2,success:2,successfulli:5,suffic:[2,5],suffix:2,suitabl:2,sum:[0,1,2,3],summari:[2,6],superscript:2,suppli:[2,5],support:[0,1,2,3,4,5],suppress:2,sure:[1,5],surpris:2,swapc1:2,swapc1s:2,swapcas:2,syntax:5,sys:[1,2],system:[0,2],tabl:[0,2],tabular:[0,5],tail:2,take:[1,2,4,5],tan:2,target:2,task:[0,5],tcp:[0,4],tell:4,temp:0,temp_parquet:0,templat:2,tensor:[1,2],term:2,tesla:0,test1:0,test:[0,2,3,4],testorcfil:0,text:2,text_col:2,text_valu:2,than:[0,2,5],thank:[2,5],thei:[2,5],them:[2,5],theme:2,therefor:2,thi:[0,1,2,3,4,5],thing:[3,5],think:5,this_i:2,those:2,though:[0,5],thousand:[1,2],thread:[2,5],threadidx:[2,5],three:[1,2,5],through:[2,5],thrust:2,thu:[0,2],tiger:2,time:[1,2,3,5],timedelta:2,timestamp:[0,2,3],timestamp_typ:2,titl:2,to_arrai:[0,2],to_arrow:[0,2],to_csv:[0,2],to_dict:2,to_dlpack:[1,2],to_feath:2,to_fram:2,to_gpu_arrai:2,to_gpu_matrix:2,to_hdf:2,to_json:2,to_orc:2,to_panda:[0,2,3],to_parquet:[0,2],to_record:2,to_replac:2,to_seri:2,to_str:2,to_strip:2,todlpack:1,todo:2,togeth:1,token:2,token_count:2,tolist:2,too:[2,5],top:0,total:[1,2,5],tpb:2,traceback:2,track:3,tracker:3,trail:2,train:6,transform:[0,1,2],translat:2,transpar:2,transpos:[1,2],treat:2,tree_method:4,triangl:2,trim:2,true_valu:2,truediv:2,truncat:2,tune:2,tupl:[0,2],tupleize_col:2,turn:[2,5],tutori:[0,2],twenti:0,two:[1,2,5],txt:2,typ:2,type:[0,1,2,5],typeerror:2,udf:[1,2,6],uint16index:6,uint32index:6,uint64:2,uint64index:6,uint8index:6,unbias:2,unchang:2,uncorr:0,undefin:5,under:[0,2],underli:[0,1,2,5],underneath:5,unicod:[0,2],unifi:4,union:2,uniqu:[0,2],unit:2,unix:2,unless:2,unlik:2,unmap:2,unord:2,unpivot:2,unsort:3,unspecifi:2,until:[0,2],untouch:2,unus:2,unusu:2,updat:2,upper:2,uppercas:2,upstream:0,upward:2,url:2,url_decod:2,url_encod:2,ursula:5,usag:[0,2,5],use:[1,2,3,4,5,6],use_index:2,use_nam:2,use_pandas_metadata:2,usecol:2,used:[0,2,5],useful:[2,4,5],user:[0,1,2,3,4,6],userwarn:[1,5],uses:[0,2,5],using:[0,1,2,4,5],usr:1,utf:[0,2],util:[0,4,5],uuid:2,val:[0,2],valid:[2,5],valid_count:2,validity_mask:5,vals_a:[0,2],vals_b:[0,2],valu:[0,2,4,6],value1:2,value_count:[0,2],value_nam:2,value_var:2,valueerror:[1,2],valuen:2,values_host:2,values_to_str:2,van:2,var_nam:2,vari:0,variabl:[0,1,2],varianc:2,varieti:5,variou:2,vector:2,verbos:2,veri:[1,5],versa:2,version:[0,2,6],versu:2,via:[0,1,2],vice:2,view:2,visit:1,visual:3,volatil:0,w605:2,wai:[1,2,5],wait:[4,6],walk:5,wall:1,want:[0,1,5],warn:[1,2,4],weekdai:2,well:[1,2],wendi:5,were:[0,2],whale:2,what:[5,6],when:[2,3,5,6],where:[0,2],whether:[1,2],which:[0,1,2,3,5],white:2,whitespac:2,whose:2,wide:2,width:2,wild:2,wildcard:0,win_siz:[2,5],win_typ:2,window:[2,6],wise:[0,1,2,3],within:[2,5],without:[1,2,5],won:1,word:2,work:[0,2,4,5,6],worker:[0,4],workflow:[0,6],world:2,wors:2,would:[0,2,5],wouldn:1,wrap:[0,2,5],wrapper:2,writabl:2,write:[0,1,2,5],write_to_dataset:2,written:2,x_test:4,x_train:4,xavier:5,xcde:2,xdc:2,xgboost:6,xyz:2,xyz_hhh:2,y_test:4,y_train:4,y_type:0,year:[2,5],yearfirst:2,yet:[0,2,3,5],yield:0,you:[0,1,2,5],your:[0,1,2,5],yourself:5,z756:2,zebra:2,zero:[2,5],zfill:2,zip:[0,2,5],zlib:2,zstd:2,zv576:2},titles:["10 Minutes to cuDF and Dask-cuDF","10 Minutes to cuDF and CuPy","API Reference","Multi-GPU with Dask-cuDF","10 Minutes to Dask-XGBoost","Overview of User Defined Functions with cuDF","Welcome to cuDF\u2019s documentation!"],titleterms:{"boolean":0,"function":5,"import":4,"null":5,api:[2,3],append:0,applymap:0,arrai:[1,5],arrow:0,categor:0,categori:2,categoricalindex:2,cluster:4,comput:4,concat:0,convert:[0,1],creation:0,csv:0,cudf:[0,1,3,4,5,6],cupi:[1,5],dask:[0,3,4],dask_xgboost:4,data:0,datafram:[1,2,5],dataset:4,datetimeindex:2,defin:[4,5],develop:3,disabl:4,document:6,float32index:2,float64index:2,genericindex:2,get:0,gpu:3,gpuarrowread:2,group:0,groupbi:[2,5],handl:5,histogram:0,how:4,index:[0,2],indic:6,initi:4,input:4,int16index:2,int32index:2,int64index:2,int8index:2,interweav:1,join:0,kernel:5,label:0,librari:0,matrix:1,method:0,metric:4,minut:[0,1,4],miss:0,model:4,modul:4,multi:3,multiindex:0,navig:3,nccl:4,necessari:4,numba:5,numpi:0,object:0,onli:4,oper:[0,5],orc:0,out:0,overview:5,p2p:4,panda:0,paramet:4,parquet:0,perform:0,persist:0,posit:0,predict:4,pydata:1,random:4,rangeindex:2,refer:2,represent:0,rmse:4,roll:5,run:4,select:0,seri:[0,1,2,5],smooth:1,spars:1,standard:5,stat:0,string:[0,2],stringindex:2,summari:5,tabl:6,time:0,tip:0,train:4,transpos:0,udf:5,uint16index:2,uint32index:2,uint64index:2,uint8index:2,use:0,user:5,valu:5,version:4,via:4,view:0,wait:0,welcom:6,what:[0,3],when:0,window:5,work:3,workflow:1,xgboost:4}})