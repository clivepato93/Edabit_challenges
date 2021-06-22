# https://edabit.com/challenge/9Q5nsEy2E2apYHwX8


class programmer:
	def __init__ (self,salary,work_hours):
		self.salary=salary
        self.work_hours=work_hours
	def __del__ (self):
		return "oof, "+"{} {}".format(self.salary,self.work_hours)
    def compare (self, other_programmer):
        if self.salary == other_programmer.salary:
            if self.work_hours < other_programmer.work_hours:
                return self
            else:
                return other_programmer
        else:
            if self.salary < other_programmer.salary:
                return self
            else:
                return other_programmer

		#code
