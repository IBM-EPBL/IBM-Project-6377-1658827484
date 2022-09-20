#!/usr/bin/env python
# coding: utf-8

# # Basic Python

# ## 1. Split this string

# In[3]:


s = "Hi there Sam!"


# In[4]:


s.split()


# ## 2. Use .format() to print the following string. 
# 
# ### Output should be: The diameter of Earth is 12742 kilometers.

# In[27]:


planet = "Earth"
diameter = "12742"


# In[28]:


print("The diameter of {planet} is {diameter} kilometers.".format(planet=planet,diameter=diameter))


# ## 3. In this nest dictionary grab the word "hello"

# In[2]:


d = {'k1':[1,2,3,{'tricky':['oh','man','inception',{'target':[1,2,3,'hello']}]}]}


# In[5]:


d['k1'][3]['tricky'][3]['target'][3]


# # Numpy

# In[6]:


import numpy as np


# ## 4.1 Create an array of 10 zeros? 
# ## 4.2 Create an array of 10 fives?

# In[29]:


np.zeros(10)


# In[30]:


5*np.ones(10)


# ## 5. Create an array of all the even integers from 20 to 35

# In[11]:


lis=[x for x in range(20,36)]
lis=list(filter(lambda x:(x%2==0),lis))
lis


# ## 6. Create a 3x3 matrix with values ranging from 0 to 8

# In[34]:


mat=[x for x in range(0,9)]
mat=np.random.choice(mat,size=(3,3))
mat


# ## 7. Concatenate a and b 
# ## a = np.array([1, 2, 3]), b = np.array([4, 5, 6])

# In[19]:


a=np.array([1,2,3])
b=np.array([4,5,6])
ans=np.concatenate((a,b),axis=0)
ans


# # Pandas

# ## 8. Create a dataframe with 3 rows and 2 columns

# In[20]:


import pandas as pd


# In[21]:


rows=["Row1","Row2","Row3"]
cols=["Col1","Col2"]
df=pd.DataFrame(index=rows,columns=cols)
df


# ## 9. Generate the series of dates from 1st Jan, 2023 to 10th Feb, 2023

# In[22]:


pd.date_range(start="1-1-2023",end="10-2-2023",freq="1D")


# ## 10. Create 2D list to DataFrame
# 
# lists = [[1, 'aaa', 22],
#          [2, 'bbb', 25],
#          [3, 'ccc', 24]]

# In[23]:


lists = [[1, 'aaa', 22], [2, 'bbb', 25], [3, 'ccc', 24]]


# In[25]:


df1=pd.DataFrame(lists)
df1


# In[ ]:




